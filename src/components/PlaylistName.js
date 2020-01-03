import React from 'react';


//This component is in charge of the custom playlist name textbox and "save playlist" button
class PlaylistName extends React.Component{
	render(){
		return (
			<div className="playlist-container mb-4">
				<input
					type="text"
					value={this.props.listName}
					onChange={this.props.updatePlaylistName}
				/>
				<button
					className="primary-btn"
					onClick={this.props.createPlaylist}>Save Playlist
				</button>
			</div>

		);
	}
}

export default PlaylistName;
