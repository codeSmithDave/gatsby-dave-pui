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
					description="This app helps new and experienced aquarium owners with useful information regarding fish (temp, pH, etc.).
		The user can either scroll through the list, or they can use different search filters to look up specific fish."
					tech="JavaScript (Reactjs), HTML, CSS (SASS), Bootstrap"
					link="/aquarium-encyclopedia/"
				/>
				<BoxContent
					imgPath={props.data.spotifyApp.childImageSharp.fluid}
					title="Spotify Music App"
					description="The Spotify Music App is a Reactjs application
		that lets the user search songs and create custom playlists and save them to their Spotify account."
					tech="JavaScript (Reactjs), HTML, CSS (SASS), Bootstrap"
					link="/spotify-app/"
				/>
				<BoxContent
					imgPath={props.data.anglerarea.childImageSharp.fluid}
					title="Angler Area"
					description="Angler Area is a WordPress fishing blog aimed at beginners, however,
		more experienced anglers may also benefit."
					tech="WordPress, PHP, HTML, CSS (SASS), Bootstrap"
					isExLink={true}
					link="https://anglerarea.com/"
				/>
				<BoxContent
					imgPath={props.data.mypetacademia.childImageSharp.fluid}
					title="My Pet Academia"
					description="My Pet Academia is a WordPress pets blog aimed at helping new pet owners in their journey."
					tech="WordPress, PHP, HTML, CSS (SASS), Bootstrap"
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