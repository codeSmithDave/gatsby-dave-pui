import React from "react";

class GameCanvas extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			y: 0
		};

		this.MoveDown = this.MoveDown.bind(this);
		this.GameTimer = this.GameTimer.bind(this);
	}

	componentDidMount(){
		this.canvas = this.refs.gameCanvas;
		this.ctx = this.canvas.getContext('2d');
		this.img = new Image();

		this.img.src = this.props.shipGraphic;
		this.img.onload = () => {
			this.ctx.drawImage(this.img, 0, this.state.y);
		};



		// this.props.returnCanvas(canvas);

		setInterval( () => {
			this.setState((prevState) => ({
				y: prevState.y + 3
			}));
		}, 100);
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		// alert(prevState.y);

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.canvas = this.refs.gameCanvas;
		this.ctx = this.canvas.getContext('2d');
		this.img = new Image();

		this.img.src = this.props.shipGraphic;
		this.img.onload = () => {
			this.ctx.drawImage(this.img, 0, prevState.y);
		};




		// this.img.onload = () => {
		// 	this.ctx.drawImage(this.img, 0, prevState.y);
		// };
	}

	GameTimer(img, ctx){

	}

	MoveDown(){
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