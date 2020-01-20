import React from "react";
// import { Link } from "gatsby";
import { graphql } from 'gatsby';
// import Img from "gatsby-image";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import GameLoop from "../components/GameLoop";
import GameCanvas from "../components/GameCanvas";
import PongPlayer from "../components/PongPlayer";

class Game extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			canvas: '',
			canvasCtx: ''
		};

		this.getCanvas = this.getCanvas.bind(this);
	}

	getCanvas(canvas, ctx){
		this.setState({
			canvas: canvas,
			canvasCtx: ctx
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		// console.log(this.state.canvasCtx);
	}

	render(){
		return(
			<Layout>
			    <SEO title="Home" />
			    <div className="boxing-timer-container">
					<div className="inner-boxing-timer pt-5 pb-5 pl-3 pr-3">
						<GameCanvas
							shipGraphic={this.props.data.file.childImageSharp.fluid.src}
							width={300}
							height={300}
							returnCanvas={this.getCanvas}
						/>
						<GameLoop canvas={this.state.canvas} canvasContext={this.state.canvasCtx} shipGraphic={this.props.data.file.childImageSharp.fluid.src} >
							<PongPlayer canvas={this.state.canvas} canvasContext={this.state.canvasCtx} />
						</GameLoop>
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