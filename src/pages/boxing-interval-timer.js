import React from "react";
// import { Link } from "gatsby";
import { graphql } from 'gatsby';
// import Img from "gatsby-image";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import GameCanvas from "../components/GameCanvas";

class Game extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			canvas: '',
			canvasCtx: ''
		};

		this.getCanvas = this.getCanvas.bind(this);
	}

	getCanvas(canvas){
		

		this.setState({
			canvas: canvas,
			canvasCtx: canvas.getContext('2d')
		});

		console.log(this.state.canvas);

		// const canvas = this.refs.gameCanvas;
		// const ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = this.props.data.file.childImageSharp.fluid.src;
		
		// img.onload = () => {
		// 	ctx.drawImage(img, 0, 0);
		// 	ctx.fillStyle = 'black';
		// };
	}

	render(){
		return(
			<Layout>
			    <SEO title="Home" />
			    <div className="boxing-timer-container">
					<div className="inner-boxing-timer pt-5 pb-5 pl-3 pr-3">
						<GameCanvas 
							shipGraphic={this.props.data.file.childImageSharp.fluid.src}
							width={800}
							height={800}
							returnCanvas={this.getCanvas}
						/>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Game;

export const query = graphql`
  query {
    file(relativePath: {eq: "gatsby-icon.png"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`