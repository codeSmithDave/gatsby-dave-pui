import React from "react";

class GameLoop extends React.Component{
	constructor(props){
		super(props);

		this.loop = this.loop.bind(this);
		this.draw = this.draw.bind(this);
		this.clear = this.clear.bind(this);
		this.startGame = this.startGame.bind(this);
	}

	componentDidMount(){
		// this.loop();
		// console.log(this.props.children);
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		
		if(this.props.canvasContext){
			
		}
		
	}

	draw(){
		
	}

	loop(){
		
	}

	startGame(){
		// alert('game start');
		// this.loop();
		// setInterval(this.loop, 10);


		// window.requestAnimationFrame(this.startGame);
	}

	clear(){
this.props.canvasContext.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height);
	}


	render(){
		return (
			 <>
			 	<button type="button" onClick={this.startGame}>Star Game!</button> 
				<button type="button" onClick={this.clear}>Clear Canvas!</button> 
				{this.props.children}
			 </>
		);
	}
}

export default GameLoop;