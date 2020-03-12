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

	function checkImgLink(){
		return(
			props.isExLink ?
				//if the link exists, use this html anchor to link to a page outside of this website
				<a href={props.link} className="box-img-link">
			    	<Img className="content-img" fluid={
							//check if the user gave us an image; if not, use the default
							(props.imgPath) ? props.imgPath : data.file.childImageSharp.fluid
						}
					/>
			    </a>
			:
				//link doesn't exists, so use gatsby's internal link component
				<Link to={props.link} className="box-img-link">
			    	<Img className="content-img" fluid={
							//check if the user gave us an image; if not, use the default
							(props.imgPath) ? props.imgPath : data.file.childImageSharp.fluid
						}
					/>
			    </Link>
		);
	};

	function checkTitleLink(){
		return(
			props.isExLink ?
				<a href={props.link}>{props.title}</a>
			:
				<Link to={props.link}>{props.title}</Link>
		);
	};

	function checkViewLink(){
		return(
			props.isExLink ?
				<a href={props.link} className="content-link-btn d-block text-center">View</a>
			:
				<Link to={props.link} className="content-link-btn d-block text-center">View</Link>
		);
	};

  return (
    <li className="box-content d-flex flex-column mb-4  ">
    	{checkImgLink()}
    	<div className="box-inner-content">
    		<div className="content-text">
				<h2 className="obj-title text-center">
					{checkTitleLink()}
				</h2>
				<p>{props.description}</p>
			</div>
			<div className="tech-used-container mt-auto">
				<span className="tech-used">Technologies Used:</span>
				<span>{props.tech}</span>
			</div>
			{
				checkViewLink()
			}
    	</div>
    </li>
  );
}

//isExLink	- accepts a boolean value of true or false
//			- it's used when you want to create a link to an external page (ie: another website)
BoxContent.defaultProps = {
	isExLink: false
};

export default BoxContent;
