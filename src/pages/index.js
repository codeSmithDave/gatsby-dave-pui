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
  {console.log(props.data)}
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
					imgPath={props.data.aquariumEncyclopedia.childImageSharp.fluid}
					title="Aquarium Encyclopedia"
					description="The Spotify Music App is a Reactjs application
		that lets the user search songs and create custom playlists"
					tech="JavaScript (Reactjs), HTML, CSS (SASS)"
					link="/aquarium-encyclopedia/"
				/>
				<BoxContent
					imgPath={props.data.spotifyApp.childImageSharp.fluid}
					title="Spotify Music App"
					description="The Spotify Music App is a Reactjs application
		that lets the user search songs and create custom playlists"
					tech="JavaScript (Reactjs), HTML, CSS (SASS)"
					link="/spotify-app/"
				/>
				<BoxContent
					imgPath={props.data.anglerarea.childImageSharp.fluid}
					title="Angler Area"
					description="The Spotify Music App is a Reactjs application
		that lets the user search songs and create custom playlists"
					tech="WordPress, PHP, HTML, CSS (SASS)"
					isExLink={true}
					link="https://anglerarea.com/"
				/>
				<BoxContent
					imgPath={props.data.mypetacademia.childImageSharp.fluid}
					title="My Pet Academia"
					description="The Spotify Music App is a Reactjs application
		that lets the user search songs and create custom playlists"
					tech="WordPress, PHP, HTML, CSS (SASS)"
					isExLink={true}
					link="https://mypetacademia.com/"
				/>
			</BoxContentOuter>
		</div>
	</div>
  </Layout>
);

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