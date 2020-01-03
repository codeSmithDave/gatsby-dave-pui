import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../components/scss/Spotify App/spotifyApp.scss';

import SpotifyAuthorize from '../components/SpotifyAuthorize';
import SearchSongs from '../components/SearchSongs';
import DisplaySongResults from '../components/DisplaySongResults';
import CustomPlaylist from '../components/CustomPlaylist';
import PopupMessage from '../components/PopupMessage';
import Spotify from '../components/Spotify';

// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default SecondPage;

class App extends React.Component{
	constructor(props){
		super(props);

		//searchResults = array containing songs from Spotify
		//searchTerm = user's search keywords
		//customPlaylist = list of songs selected by the user from the search results
		//customListName = name of the custom playlist
		//msgContainer = - this state contains the id of a div which will be used to display error and success messages
		//               - we pass it down to different methods as a parameter, then, the methods will add some message to its inner html
		this.state = {
			searchResults: [],
			searchTerm: '',
			customPlaylist: [],
			customListName: 'My Playlist',
			msgContainer: 'popup-msg-container'
		};

		this.getSearchResults = this.getSearchResults.bind(this);
		this.addToPlaylist = this.addToPlaylist.bind(this);
		this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
		this.createCustomPlaylist = this.createCustomPlaylist.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.displayMessage = this.displayMessage.bind(this);
	}

	displayMessage(message){
		let msgBox = document.getElementById(this.state.msgContainer);

		msgBox.firstElementChild.innerHTML = message;
		msgBox.style.display = 'block';
	}

	//get a list of songs from Spotify based on the user's searchTerm
	getSearchResults(searchTerm){
		// let msgBox = document.getElementById(this.state.msgContainer);

		//the search field must contain at least 1 character before we can search anything on Spotify
		if(searchTerm)
		{
			Spotify.search(searchTerm)
			.then(results => {
				if(results) this.setState({searchResults: results});
			});
		}
		//let the user know that they must type something first
		else{
			this.displayMessage("The search field can't be empty!");
			// msgBox.firstElementChild.innerHTML = "The search field can't be empty!";
			// msgBox.style.display = 'block';
		}
	}

	//Remove the selected song from the custom playlist
	removeFromPlaylist(song){
		let playlist = this.state.customPlaylist;
		let newPlaylist = [];

		if(playlist.find(savedSong => savedSong.id === song.id)){
			newPlaylist = playlist.filter(savedSong => savedSong.id !== song.id);

			this.setState({
				customPlaylist: newPlaylist
			});
		}
	}

	//This method is used to add a song to the custom playlist - it only adds the song if it doesn't already
	//exist in the custom playlist
	addToPlaylist(song){
		let playlist = this.state.customPlaylist;

		//if the song is already in the playlist don't add it again
		if(playlist.find(savedSong => savedSong.id === song.id)){

			return this.displayMessage("You already added this song!");
		}
		//the song is not in the playlist, add it to the playlist
		else{
			playlist.push(song);

			this.setState({
				customPlaylist: playlist
			});
		}
	}

	//to make sure we have the latest custom playlist name, we update the customListName state
	//every time the user is changing the name (on every character keystroke)
	updatePlaylistName(e){
		this.setState({
			customListName: e.target.value
		});
	}

	createCustomPlaylist(){
		let songUris = this.state.customPlaylist.map( song => song.uri);

		Spotify.createPlaylist(this.state.customListName, songUris)
		.then(() => {
			this.setState({
				customListName: 'My Playlist',
				customPlaylist: []
			});
		});
	}

	componentDidMount(){
		//after everything is loaded, give the Spotify object the id of the 'messages div'
		//so it can let the user know if there are any errors or successes (such as created playlist, etc.)
		Spotify.getMessageDiv(this.state.msgContainer);
	}

	render(){
		return (

			<Layout className="music-app">
			    <SEO title="Spotify Music App" />
					<div className="music-app-container pb-5">
						<h1 className="obj-title text-center pt-4 pb-4 mb-5">
							Spotify <span>Music</span> App
						</h1>
						<div className="container">
							<PopupMessage containerName={this.state.msgContainer} />
							<SpotifyAuthorize 
								authorize={Spotify.getAccessToken}
								authInfo={Spotify.authInfo}
							/>
							<SearchSongs onClick={this.getSearchResults} />
							<DisplaySongResults
								songList={this.state.searchResults}
								onAdd={this.addToPlaylist}
							/>
							<CustomPlaylist
								playlist={this.state.customPlaylist}
								onRemove={this.removeFromPlaylist}
								listName={this.state.customListName}
								createPlaylist={this.createCustomPlaylist}
								updatePlaylistName={this.updatePlaylistName}
							/>
						</div>
					</div>
			  </Layout>
		);
	}
}

export default App;