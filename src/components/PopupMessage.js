import React from 'react';

//This component is used to display different pop-up messages such as errors or success messages
class PopupMessage extends React.Component{
	constructor(props){
		super(props);

		this.hidePopup = this.hidePopup.bind(this);
	}

	hidePopup(){
		document.getElementById(this.props.containerName).style.display = 'none';
	}

	render(){
		return (
			<div id={this.props.containerName}>
				<p className="error-message"></p>
				<button id="hide-error" onClick={this.hidePopup}>Ok</button>
			</div>
		);
	}
}

export default PopupMessage;
