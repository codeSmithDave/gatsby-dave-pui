import React from "react";
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class SearchFilterBtn extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			filterisOpen: false
		};

		this.filterClick = this.filterClick.bind(this);
	}

	filterClick(){
		let body = this.props.accordionBody.current;

		if(this.state.filterisOpen === false && body){
			body.classList.remove('accordion-body-collapse');
			body.classList.add('accordion-body-open');
			
			console.log(body);

			this.setState({
				filterisOpen: true
			});
		}
		else if(this.state.filterisOpen === true && body){
			body.classList.remove('accordion-body-open');
			body.classList.add('accordion-body-collapse');
			

			this.setState({
				filterisOpen: false
			});
		}
	}

	render(){
		return(
			<input type="button" name="button" value="Filters" onClick={this.filterClick} />
		);
	}
}

export default SearchFilterBtn;