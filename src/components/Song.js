import React from 'react';
import Button from './Button';

//This component is in charge of displaying information about a song
class Song extends React.Component{
	render(){
		return (
			<li className="song">
				<div className="song-info">
					<div className="song-name">{this.props.song.name}</div>
					<div className="song-album">
						<span className="album">Album:</span>
						<span className="info">{this.props.song.album}</span>
					</div>
					<div className="song-artist">
						<span className="artist">Artist:</span>
						<span className="info">{this.props.song.artist}</span>
						
					</div>
				</div>
				<Button
					isRemoval={this.props.isRemoval}
					onAdd={this.props.onAdd}
					onRemove={this.props.onRemove}
					song={this.props.song}
				/>
			</li>
		);
	}
}

export default Song;
