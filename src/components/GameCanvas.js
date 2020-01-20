import React from "react";

class GameCanvas extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			y: 0
		};

		this.moveDown = this.moveDown.bind(this);
		this.gameTimer = this.gameTimer.bind(this);
	}

	componentDidMount(){
		this.canvas = this.refs.gameCanvas;
		this.ctx = this.canvas.getContext('2d');
		// this.img = new Image();

		// this.img.src = this.props.shipGraphic;
		// this.img.onload = () => {
		// 	this.ctx.drawImage(this.img, 0, this.state.y);
		// 	this.ctx.restore();
		// };





		this.props.returnCanvas(this.canvas, this.ctx);

		// setInterval( () => {
		// 	this.setState((prevState) => ({
		// 		y: prevState.y + 3
		// 	}));
		// }, 100);
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		// alert(prevState.y);






		// this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// this.canvas = this.refs.gameCanvas;
		// this.ctx = this.canvas.getContext('2d');
		// this.img = new Image();

		// this.img.src = this.props.shipGraphic;
		// this.img.onload = () => {
		// 	this.ctx.drawImage(this.img, 0, prevState.y);
		// };







		// this.img.onload = () => {
		// 	this.ctx.drawImage(this.img, 0, prevState.y);
		// };
	}

	gameTimer(img, ctx){

	}

	moveDown(){
		this.setState((prevState) => ({
			y: prevState.y + 4
		}));
	}

	render(){
		return (
			<>
			
			<canvas ref="gameCanvas" width={this.props.width} height={this.props.height} />
			</>
		);
	}
}

export default GameCanvas;