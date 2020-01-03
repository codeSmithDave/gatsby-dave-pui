import React from 'react';

//The purpose of this component is to display a button for each song in the
//sections("search results" and "custom playlist"); When clicked, it will either add a song to the custom playlist
//or remove a song from the custom playlist depending on where it's rendered
class Button extends React.Component{
	constructor(props){
		super(props);

		this.renderButtonSign = this.renderButtonSign.bind(this);
		this.renderButtonAction = this.renderButtonAction.bind(this);
		this.addSong = this.addSong.bind(this);
		this.RemoveSong = this.RemoveSong.bind(this);
	}

	//the button was clicked - add the song to the custom playlist
	addSong(){
		this.props.onAdd(this.props.song);
	}

	//the button was clicked - add the song to the custom playlist
	RemoveSong(){
		this.props.onRemove(this.props.song);
	}

	//Depending on where the button is rendered, its display value will be a
	//'+' (clicking it will add the song to the custom playlist)
	//or a '-' (clicking it will remove the song from the custom playlist)
	renderButtonSign(){
		if(this.props.isRemoval) return '-';
		
		return '+';
	}

	//The button was clicked
	// - if the button is in the 'custom playlist' section, remove the song from the custom playlist
	// - if its in the "search results" section, add the song to the custom playlist
	renderButtonAction(){
		if(this.props.isRemoval) return this.RemoveSong;
		else return this.addSong;
	}

	render(){
		return <button
					className="song-btn"
					onClick={this.renderButtonAction()}
				>
					{this.renderButtonSign()}
				</button>;
	}
}

export default Button;
