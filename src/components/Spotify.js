// require('dotenv').config(); 

const clientID = process.env.SPOTIFY_ID;
const redirectUri = process.env.REDIRECT_URL;//'https://www.davepui.com/';
//msgDiv will be used to display information regarding the search
//and custom playlists functions (errors in creating playlists, successful messages)
let msgDiv;
//authContainer will be used to let the user know if Spotify succesfully authenticated / when the auth expires
//(through a text notification which will show up besides the 'Authorize' button)
let authContainer;
//accessToken is a Spotify string which gives us access Spotify's api
let accessToken;


//In order to get Spotify authorization, the user is sent to a Spotify authorization page and after they accept
//or deny, they get redirected to this app. If they accept, our website url will contain an access token
//and its expiry time (without this we cannot connect to the Spotify API).
//Because of this, every time the page loads, we check for an access token and its expiry time (and save
//the info in variables for later use)



if(window){
	window.onload = () =>{
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		//before we check for the access token, wait until we have the id of
		//the authorization message container (so we can let the user know
		//if the authorization was successful and when it expires)
		function checkAuthContainer(){
			if(!authContainer)
				window.setTimeout(checkAuthContainer, 50);
			else {
				console.log(authContainer);
				Spotify.getAccessToken();
			}
		}

		if(accessTokenMatch && expiresInMatch)	checkAuthContainer();
	}
}

//The purpose of this object is to connect to Spotify, get user authorization, retrieve songs,
//and create playlists
const Spotify = {
	authInfo(auth){
		authContainer = document.getElementById(auth);
	},

	//This method let's the user know when they successfuly authorized or when the authorization expired
	//by displaying a message in the "Spotify Authorization" section of the app
	dispAuthMessage(message){
		if(authContainer) authContainer.innerHTML = message;
	},

	//This method is in charge of getting the necessary authorization info from Spotify - For this app,
	//we use the Implicit Grant Flow which is eniterly client side - there's no server-side code
	//In order to use the Spotify API we need an access token and access token expiry time which
	//will be found in the website url
	getAccessToken(){
		console.log(authContainer + '= authContainer');

		if(accessToken)	{
			return accessToken;
		}

		//check if there's an access token and acccess token expiry time
		//we need the above in order to search the Spotify database for songs
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if(accessTokenMatch && expiresInMatch){
			accessToken = accessTokenMatch[1];

			const expiresIn = Number(expiresInMatch[1]);

// authContainer = document.getElementById('authorize-info');

			//once the access token expires, let the user know that they must authorize again
			window.setTimeout(() => {
				accessToken = '';
				Spotify.dispAuthMessage(`<span class='expire-message'>Authorization expired!</span>`);
			}, expiresIn * 1000);

			window.history.pushState('Access Token', null, '/');

			Spotify.dispAuthMessage(`<span class='success-message'>Authorized!</span>`);

			return accessToken;
		}
		//the user didn't authorize yet or the authorization expired, take them to the authorization page
		else{
			const accessUrl = `https://accounts.spotify.com/authorize?
				client_id=${clientID}
				&response_type=token
				&redirect_uri=${redirectUri}
				&scope=playlist-modify-public`;
			window.location = accessUrl;
		}
	},

	//displays various messages related to the search and custom playlist sections in a pop-up div
	//- errors (failed to create playlist, search-box can't be empty, etc.),
	//- success messages (playlist created successfuly)
	getMessageDiv(divName){
		msgDiv = document.getElementById(divName);
	},

	displayMessage(message, display = true, append = false){
		if(append)
			msgDiv.firstElementChild.innerHTML += message;
		else 
			msgDiv.firstElementChild.innerHTML = message;

		if(display)
			msgDiv.style.display = 'block';
	},

	//This method connects to the Spotify API and searches their song database for anything that
	//matches the user's search keywords
	async search(term){
		if(accessToken){
			//we encode the search term in case it contains special characters which will throw
			//a CORS error - this will cancel the fetch request
			let searchTerm = encodeURI(term);
			const url = `https://api.spotify.com/v1/search?type=track&q=${JSON.stringify(searchTerm)}`;
			const params =
				{
					headers: {  Authorization: `Bearer ${accessToken}`}
				};

			let searchSongs = await fetch(url, params);
			let response = await searchSongs.json();

			return response.tracks.items.map(song =>({
							id: song.id,
							name: song.name,
							artist: song.artists[0].name,
							album: song.album.name,
							uri: song.uri
						}));
		}
		else{
			Spotify.displayMessage(`The Spotify authorization expired! Please authorize again!`);
		}
	},

	//In order to create playlists, we need the user's Spotify account ID
	//This method finds and returns the user's ID
	async getUserId(){
		const accToken = Spotify.getAccessToken();
		const url = 'https://api.spotify.com/v1/me';
		const headers = {Authorization: `Bearer ${accToken}`};

		let response = await fetch(url, {headers});
		let userInfo = await response.json();

		return userInfo;
	},

	//This method is in charge of adding songs to a playlist created by the user
	//userId		=	This is the user's Spotify account ID - we need this to make sure we add songs
	//					to the proper account
	//playlistName	=	This will contain info about the playlist we just created
	//					Specifically, we are interested in the playlist's id so we can make sure to add
	//					the songs to the proper playlist
	//songList		=	This will contain an array of song URIs -They will let Spotify know which
	//					songs to add to the playlist
	async addSongs(userId, playlistName, songList){
		const url = `https://api.spotify.com/v1/playlists/${playlistName.id}/tracks`;
		// const url = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistName.id}/tracks`;
		const params = {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				Accept: 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({uris: songList})
		};

		let addTracks = await fetch(url, params);
		let response = await addTracks.json();

		if(response.error){
			msgDiv.firstElementChild.innerHTML += `Failed to add songs to playlist: ${response.error.message}`;
		}
		else{
			msgDiv.firstElementChild.innerHTML = `<span class='success-message'>Playlist successfully created!</span>`;
		}

		msgDiv.style.display = 'block';
	},

	//This method connects to Spotify and creates a playlist
	//playlistName	=	Contains a custom playlist name chosen by the user
	//songList		=	Contains a list (array) of songs that must be added to this custom playlist
	//					We don't add the songs to this playlist in this method, but rather we pass it on
	//					as a param in another method called 'addSongs' - we do this for readibility sake
	async createPlaylist(playlistName, songList){
		if(songList.length > 0 && accessToken){
			const userInfo = await Spotify.getUserId();
			const params = {
				headers: {Authorization: `Bearer ${accessToken}`},
				method: 'POST',
				body: JSON.stringify(
					{
						name: playlistName,
						description: `This is a custom playlist created by Dave's Music App`
					}
				)
			};
			const url = `https://api.spotify.com/v1/users/${userInfo.id}/playlists`;

			//create a new playlist
			let createList = await fetch(url, params);
			let response =  await createList.json();

			if(response.error){
				msgDiv.firstElementChild.innerHTML = `Failed to create playlist: ${response.error.message}`;
				msgDiv.style.display = 'block';
			}
			//if the playlist was successfully created, add the songs to the playlist
			else{
				msgDiv.firstElementChild.innerHTML = "<span class='success-message'>Playlist successfully created!</span><br>";
				Spotify.addSongs(userInfo.id, response, songList);
			}
		}
		else if(!accessToken){
			msgDiv.firstElementChild.innerHTML = `The Spotify authorization expired! Please authorize again!`;
			msgDiv.style.display = 'block';
		}
		else if(songList.length === 0) {
			msgDiv.firstElementChild.innerHTML = `You need at least 1 song to create a playlist`;
			msgDiv.style.display = 'block';
		}
	}
}

export default Spotify;