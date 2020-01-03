import React from 'react';
import Song from './Song';
import PlaylistName from './PlaylistName';

//This component is in charge of displaying the "Custom Playlist" section
class CustomPlaylist extends React.Component{
	render(){
		return (
			<div className="custom-playlist-container">
				<PlaylistName
					listName={this.props.listName}
					createPlaylist={this.props.createPlaylist}
					updatePlaylistName={this.props.updatePlaylistName}
				/>
				<div className="force-scroll">
					<ul className="song-list">
						{
							this.props.playlist.map(song => {
								return <Song
											key={song.id}
											song={song}
											onRemove={this.props.onRemove}
											isRemoval={true}
										/>
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default CustomPlaylist;
