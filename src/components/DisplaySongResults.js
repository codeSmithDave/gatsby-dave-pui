import React from 'react';
import Song from './Song';

//This component is in charge of displaying Spotify's search results
class DisplaySongResults extends React.Component{
	render(){
		return (
			<div className="results-container force-scroll mb-5">
				<ul className="song-list">
					{
						this.props.songList.map( song => {
							return <Song
										key={song.id}
										song={song}
										onAdd={this.props.onAdd}
										isRemoval={false}
									/>
						})
					}
				</ul>
			</div>
		);
	}
}

export default DisplaySongResults;
