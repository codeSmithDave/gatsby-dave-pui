import React from 'react';

//Before we can connect to Spotify, we must get authorization from the user
//This component is in charge of creating the 'Authorization' section which contains several things:
// - A message letting the user know that they must give us authorization before we can connect to Spotify
// - The authorization button - When clicked it will take the user to Spotify's authorization page
// - A message letting the user know when the authorization is successful and when it expired
class SpotifyAuthorize extends React.Component{
	constructor(props){
		super(props);

		this.authorize = this.authorize.bind(this);
		this.getAuthId = this.getAuthId.bind(this);
	}

	authorize(){
		this.props.authInfo('authorize-info');
		this.props.authorize();
	}

	getAuthId(){
		this.props.authInfo('authorize-info');
	}

	componentDidMount(){
		this.getAuthId();
	}

	render(){
		return (
			<div className="authorize-container mb-5">
				<p className="mb-4">In order to search songs and create playlists, we need access
				to some parts of your spotify account(view username and create, edit, follow playlists).</p>
				<div>
					<button className="primary-btn" onClick={this.props.authorize}>Authorize</button>
					<span id="authorize-info"></span>
				</div>
			</div>
		);
	}
}

export default SpotifyAuthorize;
