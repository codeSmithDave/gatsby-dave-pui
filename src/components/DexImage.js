import React from "react";
// import { Link } from "gatsby";
// import { graphql } from 'gatsby';
// import Img from "gatsby-image";
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './scss/dexImg.scss';
import CharacteristicsTable from "./CharacteristicsTable";

class DexImage extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			show: false
		};

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	componentDidMount(){
		// console.log();
	}

	showModal(){
		this.setState({
			show: true
		});
	}

	hideModal(){
		this.setState({
			show: false
		});
	}

	render(){
		return(
			<>
			<figure
				className="inner-dex-image"
				onClick={this.showModal}
				onKeyDown={this.showModal}
			>
			    <img 
			    	src={this.props.imgPath}
			        alt={this.props.title}
			        className="mb-3"
			    />
			    <figcaption className="text-center font-italic">{this.props.title}</figcaption>
			    <span className="water-type">{this.props.waterType}</span>
			</figure>
			<Modal
				show={this.state.show}
				onHide={this.hideModal}
				dialogClassName="dex-image-modal"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton>
				  <Modal.Title id="example-custom-modal-styling-title">
				    <h2 className="obj-title mb-0">{this.props.title}</h2>
				  </Modal.Title>
				</Modal.Header>
				<Modal.Body className="pt-5">
					<div className="d-md-flex align-items-md-center mb-5">
						<img 
					    	src={this.props.imgPath}
					        alt={this.props.title}
					        className="col-8 col-sm-6 col-md-4 offset-2 offset-sm-3 offset-md-0 pr-0 pl-0 mb-3 mb-md-0"
				    	/>
				    	<div style={this.style2} className="col-md-8 pr-md-0">
		    				<CharacteristicsTable
		    					careLevel={this.props.careLevel}
								maxSize={this.props.maxSize}
								temperament={this.props.temperament}
								minTank={this.props.minTank}
								waterConditions={this.props.waterConditions}
								diet={this.props.diet}
								family={this.props.family}
								waterType={this.props.waterType}
								scientificName={this.props.scientificName}
		    				/>
		    			</div>
			    	</div>
			    	<div>
						<p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
					    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
					    ipsam atque a dolores quisquam quisquam adipisci possimus
					    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
					    accusamus eos quod.</p>

					    <p>Ab quos consequuntur eaque quo rem! Mollitia
					    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
					    deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
					    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
					    ipsam atque a dolores quisquam quisquam adipisci possimus
					    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
					    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
					    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
					    deleniti rem!</p>

					    <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
					    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
					    ipsam atque a dolores quisquam quisquam adipisci possimus
					    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
					    accusamus eos quod.</p>

					    <p>Ab quos consequuntur eaque quo rem! Mollitia
					    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
					    deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
					    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
					    ipsam atque a dolores quisquam quisquam adipisci possimus
					    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
					    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
					    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
					    deleniti rem!Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
					    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
					    ipsam atque a dolores quisquam quisquam adipisci possimus
					    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
					    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
					    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
					    deleniti rem!</p>
			    	</div>
				</Modal.Body>
			</Modal>
			</>
		);
	}
}

export default DexImage;