import React from "react";
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class SearchFilterBody extends React.Component{
	constructor(props){
		super(props);

		this.accordionBody = React.createRef();
	}

	componentDidMount(){
		this.props.accordionBody('accordionBody');
	}

	render(){
		return(
			<div className="accordion-body accordion-body-collapse" ref="accordionBody">
				<input
  					type="checkbox"
  					key="aa"
  					id="aa"
  					name="aa"
  					value="aa"
  					onChange={this.filtersChanged}
  				/>
      			<label
      				className="text-capitalize"
      				htmlFor="aa"
      				key="aa1">
      				aaSS
      			</label>
			</div>
		);
	}
}

export default SearchFilterBody;