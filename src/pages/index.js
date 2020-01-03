import React from "react";
// import { Link } from "gatsby";
import { graphql } from 'gatsby';
// import Img from "gatsby-image";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import BoxContentOuter from "../components/BoxContentOuter";
import BoxContent from "../components/BoxContent";
import './scss/home.scss';



const IndexPage = ( props ) => (
  <Layout>
  
    <SEO title="Home" />
    <div className="home-container">
		<div className="inner-home pt-5 pb-5 pl-3 pr-3">
			<div className="head-section pt-4">
				<h1 className="heading-title text-center mb-5">Welcome to Dave's portal!</h1>
				<p className="text-center">Hi, Dave here! This website contains my personal projects. 
				Please feel free to check out the below examples!</p>
			</div>
			<BoxContentOuter>
				<BoxContent
					imgPath={props.data.file.childImageSharp.fluid}
					title="Spotify Music App"
					description="The Spotify Music App is a Reactjs application
		that lets the user search songs and create custom playlists"
					tech="JavaScript (Reactjs), HTML, CSS"
					link="/spotify-app/"
				/>
				<BoxContent
					// imgPath={props.data.file.childImageSharp.fluid}
					title="Boxing Interval Timer"
					description="The Spotify Music App is a Reactjs application
		that lets the user search songs and create custom playlists"
					tech="JavaScript (Reactjs), HTML, CSS"
					link="/boxing-interval-timer/"
				/>
			</BoxContentOuter>
		</div>
	</div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: {eq: "spotify-app.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`