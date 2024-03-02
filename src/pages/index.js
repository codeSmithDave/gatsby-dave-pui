import React from "react";
// import { Link } from "gatsby";
import { graphql } from 'gatsby';
// import Img from "gatsby-image";

import LayoutTwo from "../components/layTwo";
// import Image from "../components/image";
import SEO from "../components/seo";
import BoxContentOuter from "../components/BoxContentOuter";
import BoxContent from "../components/BoxContent";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './scss/home.scss';

class IndexPage extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			canvasContext: '',
			// canvasWidth: '',
			starList: [],
			currentStarList: [],
			screenWidth: null,
			screenHeight: null
		};

		this.canvasExists = false;

		this.canvas = React.createRef();
		this.homeLayout = React.createRef();
		this.glassContainer = React.createRef();

		this.drawElement = this.drawElement.bind(this);
		this.animate = this.animate.bind(this);
		this.addStar = this.addStar.bind(this);
	}

	componentDidMount(){
		this.setState({
			canvasContext: this.canvas.current.getContext('2d'),
			// canvasWidth: window.innerWidth,
			screenWidth: window.innerWidth,
			screenHeight: window.innerHeight
		});

		this.canvasExists = true;

		window.addEventListener("resize", this.drawElement);

		this.drawElement();

		this.createStarList(window.innerWidth, window.innerHeight);

		this.animate();
	}
	
	componentWillUnmount(){
		this.canvasExists = false;
	}
	// screenResized(){
	// 	this.setState({
	// 		screenWidth: window.innerWidth,
	// 		screenHeight: window.innerHeight
	// 	});
	// }

	//We use this method to get the latest screen size (ex: if you manually change the browser width/height)
	//Used to make sure the canvas + glass-container are always the same size as the browser dimensions
	drawElement(){
		const canvas = this.canvas.current;
		const homeLayout = this.homeLayout.current;
		let glassContainer = this.glassContainer;

		homeLayout.height = window.innerHeight;
		
		//change canvas dimensions to match browser dimensions
		canvas.width = window.innerWidth;//homeLayout.clientWidth;
		canvas.height = window.innerHeight;//canvas.clientHeight;//window.innerHeight;

console.log(window.innerHeight);

		//change glass-container dimensions to match browser
		// glassContainer.current.style.width = `${canvas.width}px`;//window.innerWidth;
		// glassContainer.current.style.height = `${canvas.height}px`;//window.innerHeight;

		// console.log(glassContainer.current.style);
	}

	animate(){
		if(this.canvasExists){
			requestAnimationFrame(this.animate);

			let context = this.canvas.current.getContext('2d');//this.state.canvasContext;
			let width = window.innerWidth;
			let height = window.innerHeight;

			context.clearRect(0, 0, width, height);

			this.createBackground(context, width, height);

			this.addStar(context, width, height);
		}
		
	}

	//create the space background for the canvas
	createBackground(context, width, height){
		//------create background start------
		let canvasBg = context.createRadialGradient(width / 2, height + 150, width / 12, width / 2, height / 2, width);

		canvasBg.addColorStop(0.0, '#1B2735');
		canvasBg.addColorStop(0.3, '#151E29');
		canvasBg.addColorStop(1.0, '#090A0F');

		context.fillStyle = canvasBg;
		context.fillRect(0, 0, width, height);
		context.fill();
		//------create background end------
	}

	//using Math.random() there is 1 in a 1000 chance that the star will change its x,y coords
	//After a new coord is chosen, the star will shrink to 0 radius, move to the new coords,
	//then grow to to its initial radius
	changeStarCoord(star, width, height){
		//Because of the shrink to 0, then grow to initial max size animations, we want to
		//make sure that we only change the x,y coords at the proper time - this means that we
		//change the coords ONLY if newX, newY are NULL - otherwise we ALREADY HAVE NEW COORDS, 
		//JUST WAITING ON THE ANIATION TO FINISH - afterwards, newX, newY will be reset to NULL
		if(star.newX == null && star.newY == null){
			//We will use this variable ('change'), to figure out if the star's x,y coords will change
			//by using Math.random() to get a number between 1 (inclusive) and 1001 (exclusive)
			let change = Math.round(Math.random() * (101 - 1) + 1);

			//Our 'magic' number is 1 (why 1? I chose a random number which happens to be 1)
			if(change === 1){
				star.newX = Math.random() * width;
				star.newY = Math.random() * height;
			}
		}
		//we already have the new coords, time to animate
		else{
			//The 1st animation, shrink the star to 0 radius
			if(star.radius > 0 && star.x !== star.newX && star.x !== star.newX){
				if(star.radius - star.starShrinkSpeed < 0){
					star.radius = 0;
				}
				else{
					star.radius -= star.starShrinkSpeed;
				}
			}
			//When the star shrinked to 0 radius, it's time to change its x,y coords
			else if(star.radius === 0 && star.x !== star.newX && star.y !== star.newY){
				star.x = star.newX;
				star.y = star.newY;
			}
			//Now that the star x,y coords changed, it's time to grow it to its initial radius
			else if(star.x === star.newX && star.x === star.newX){
				star.radius += star.starShrinkSpeed;

				//the star reached its full radius - reset newX, newY so the star can be moved again
				//if it hits the lucky number '1'
				if(star.radius >= star.initialRadius){
					star.newX = null;
					star.newY = null;
				}
			}
		}
	}

	//adds an aura around the stars (which will be animated by increasing and decreasing its size)
	changeStarAura(context, star){
		context.shadowColor = star.auraColor;

		//if the aura size reacehd the max value, it's time to decrease it (speed based on growthSpeed)
		if(star.auraSize >= star.maxAuraSize){
			star.growthSpeed = -star.growthSpeed;
		}
		//if the aura size reacehd the min value, it's time to increase the aura (speed based on growthSpeed)
		else if(star.auraSize <= star.minAuraSize){
			star.growthSpeed = -star.growthSpeed;
		}

		//change the aura size
		star.auraSize += star.growthSpeed;
		//draw the aura
		context.shadowBlur = star.auraSize;
	}

	addStar(context, width, height){
		const starsList = this.state.currentStarList.length > 0 ? this.state.currentStarList : this.state.starList;

		//go through the list of stars and draw them all onto the canvas
		starsList.forEach( (star) => {
			context.beginPath();
			
			//Add + animate the star's aura
			this.changeStarAura(context, star);

			//There is a 1 in 3000 chance that the star will change x,y coords
			this.changeStarCoord(star, width, height);

			//draw the star onto the canvas
			//x, y, radius, startAngle, endAngle, [, anticlockwise]
			context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
			context.fillStyle = star.starColor;
			context.closePath();
			context.fill();
		});

		//update the currentStarList to contain the latest star data (x y coords, aura sizes, etc.)
		this.setState({
			currentStarList: starsList
		});
	}

	createStarList(width, height){
		let list = [];

		for (var i = 0; i < 500; i++) {
			//create an aura color for the star
			let r = Math.round(Math.random() * 255);
			let g = Math.round(Math.random() * 255);
			let b = Math.round(Math.random() * 255);
			let color = `rgb(${r}, ${g}, ${b})`;
			//create initial/max aura size
			let auraSize = Math.round(Math.random() * (20 - 10) + 10);
			let starRadius = Math.random() * 3;
			let growSpeed = Math.random() * (0.4 - 0.3) + 0.3;

			list.push(
				{
					x: Math.random() * width,
					y: Math.random() * height,
					newX: null,
					newY: null,
					//Math.random * (maxNum - minNum) + minNum
					//choose a random growth speed between 0.1 (inclusive) and 0.5 (not inclusive)
					growthSpeed: growSpeed,
					starShrinkSpeed: growSpeed,
					starColor: '#fff',
					auraColor: color,
					auraSize: auraSize,
					maxAuraSize: auraSize,
					minAuraSize: 3,
					isMaxAura: false,
					radius: starRadius,
					initialRadius: starRadius,
					isRadiusMax: true
				}
			);
		};

		this.setState({
			starList: list
		});
	}
  
	render(){
		return(
			<LayoutTwo>
		    <SEO title="Home" />
		    <div className="home-container" ref={this.homeLayout}>
		    	<canvas ref={this.canvas}>Canvas is not supported in the browser you are currently using!</canvas>

		    	<div className="glass-container" ref={this.glassContainer}>
	    			<div className="glass-inner">
	    				<div className="content">
	    					<h1 className="obj-title">Dave's Portal</h1>
				    		<h2 className="obj-sub-title">Frontend Developer</h2>
				    		
				    		<AnchorLink href="#box-cnt-container" className="obj-btn">Projects</AnchorLink>
	    				</div>
					</div>
				</div>

		    	<div className="home-content-container container">
					<BoxContentOuter>
						<BoxContent
							imgPath={this.props.data.aquariumEncyclopedia.childImageSharp.fluid}
							title="Aquarium Encyclopedia"
							description="This app helps new and experienced aquarium owners with useful information regarding fish (temp, pH, etc.).
				The user can either scroll through the list, or they can use different search filters to look up specific fish."
							tech="JavaScript (Reactjs), HTML, CSS (SASS), Bootstrap"
							link="/aquarium-encyclopedia/"
						/>
						<BoxContent
							imgPath={this.props.data.spotifyApp.childImageSharp.fluid}
							title="Spotify Music App"
							description="The Spotify Music App is a Reactjs application
				that lets the user search songs and create custom playlists and save them to their Spotify account."
							tech="JavaScript (Reactjs), HTML, CSS (SASS), Bootstrap"
							link="/spotify-app/"
						/>
						<BoxContent
							imgPath={this.props.data.anglerarea.childImageSharp.fluid}
							title="Angler Area"
							description="Angler Area is a WordPress fishing blog aimed at beginners, however,
				more experienced anglers may also benefit."
							tech="WordPress, PHP, HTML, CSS (SASS), Bootstrap"
							isExLink={true}
							link="https://anglerarea.com/"
						/>
						<BoxContent
							imgPath={this.props.data.mypetacademia.childImageSharp.fluid}
							title="My Pet Academia"
							description="My Pet Academia is a WordPress pets blog aimed at helping new pet owners in their journey."
							tech="WordPress, PHP, HTML, CSS (SASS), Bootstrap"
							isExLink={true}
							link="https://mypetacademia.com/"
						/>
					</BoxContentOuter>
		    	</div>
		    	
		    	
		    </div>
		  </LayoutTwo>
		);
	}
}

export default IndexPage;

export const query = graphql`
  query {
    spotifyApp: file(relativePath: {eq: "spotify-app.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    anglerarea: file(relativePath: {eq: "home/anglerarea.com.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    mypetacademia: file(relativePath: {eq: "home/mypetacademia.com.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    aquariumEncyclopedia: file(relativePath: {eq: "home/aquarium_encyclopedia.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
