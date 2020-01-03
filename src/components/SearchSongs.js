import React from 'react';

//This component creates the search buttons for the application
//The search bar input - this is where the user types in keywords
//The search button - When the user clicks this button, it will connect and search Spotify for songs
//					  matching the keywords from the search bar
class SearchSongs extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			searchTerm: ''
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
	}

	handleButtonClick(){
		this.props.onClick(this.state.searchTerm);
	}

	//we update the 'searchTerm' state every time the user adds or deletes anything from the search bar
	//to make sure we have the most up to date keywords
	handleTermChange(e){
		this.setState({
			searchTerm: e.target.value
		});
	}

	render(){
		return (
			<div className="search-songs mb-4">
				<input type="text" placeholder="Song Name..." onChange={this.handleTermChange} />
				<button
					className="primary-btn"
					onClick={this.handleButtonClick}>Search Songs
				</button>
			</div>
		);
	}
}

export default SearchSongs;
