import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import Img from "gatsby-image";
import "./scss/default/boxContent.scss";

const BoxContent = (props) => {
	//if the user doesn't provide an image, then we use the below as default
	const data = useStaticQuery(graphql`
	  query {
	    file(relativePath: {eq: "gatsby-icon.png"}) {
	      childImageSharp {
	        fluid(maxWidth: 400, maxHeight: 400) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	  }
	`);

  return (
    <li className="box-content mb-4 col-sm-5 col-md-5 col-lg-3 ml-sm-3 mr-sm-3 ">
    <Link to={props.link}>
    	<Img className="content-img" fluid={
				//check if the user gave us an image; if not, use the default
				(props.imgPath) ? props.imgPath : data.file.childImageSharp.fluid
			}
		/>
		
    </Link>
		
		<div className="content-text">
			
			
				<h3 className="obj-title text-center">
				<Link to={props.link}>{props.title}</Link>
				</h3>
			
			<p>{props.description}</p>
			<div>
				<span className="tech-used">Technologies Used:</span>
				<span>{props.tech}</span>
			</div>
		</div>
		<Link to={props.link} className="content-link-btn d-block text-center">View</Link>
    </li>
  );
}

export default BoxContent;
