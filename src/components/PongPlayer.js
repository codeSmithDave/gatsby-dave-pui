import React from "react";

class PongPlayer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			coordX: null,
			coordY: null,
			width: 50,
			height: 15
		};

		this.drawPlayer = this.drawPlayer.bind(this);
	}

	componentDidMount(){
		// this.loop();
		
this.movePlayer();
		
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		
		//initial update - this is where we get the canvas, canvas ctx props
		if(this.state.coordX == null && this.state.coordsY == null){


			this.setState({
				coordX: this.props.canvas.width / 2,
				coordY: this.props.canvas.height - 50
			});

			
			
		}
		else{
			this.drawPlayer();
		}

		
	}

	drawPlayer(){
		// console.log(this.state.coordX);
		this.props.canvasContext.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height);
		this.props.canvasContext.beginPath();
		this.props.canvasContext.rect(
			this.state.coordX - (this.state.width / 2),
			this.state.coordY,
			this.state.width,
			this.state.height
			);
		this.props.canvasContext.stroke();
		this.props.canvasContext.closePath();
	}

	movePlayer(){
		document.addEventListener('keydown', event => {
			console.log(event);


			//pressed right arrow
			if (event.isComposing || event.keyCode === 39) {
		    	this.setState((prevState) => ({
		    		coordX: prevState.coordX + 4
		    	}));
			}

			//pressed left arrow
			if (event.isComposing || event.keyCode === 37) {
		    	this.setState((prevState) => ({
		    		coordX: prevState.coordX - 4
		    	}));
			}
		});
	}


	render(){
		return (
			 <></>
		);
	}
}

export default PongPlayer;