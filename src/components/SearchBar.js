import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import SearchFilterBtn from "./SearchFilterBtn";
// import SearchFilterBody from "./SearchFilterBody";

class SearchBar extends React.Component{
	constructor(props){
		super(props);

		this.updateSearch = this.updateSearch.bind(this);
		this.filtersChanged = this.filtersChanged.bind(this);
	}

	updateSearch(event){
		this.props.updateSearch(event.target.value);
	}

	filtersChanged(event){
		if(event.target.checked){
			this.props.updateSearchFilter(event.target.value, true);
		}
		else{
			this.props.updateSearchFilter(event.target.value, false);
		}
		
	}

	render(){
		return(
			<div>
				<input
					type="text"
					id="search-bar"
					name="SearchBar"
					onChange={this.updateSearch}
					placeholder="Search..."
					className={this.props.class}
				/>
				<Accordion className="mb-5">
				  <Card>
				    <Card.Header>
				      <Accordion.Toggle as={Button} variant="link" eventKey="0">
				        Search Filters
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="0">
				      <Card.Body>
				      	<div className="card-body-inner text-center p-3">
				      		<ul className="d-sm-flex justify-content-center">
					      	{
					      		this.props.filterDispName.map(filter => {
					      			return(
					      				<li className="mr-sm-4">
						      				<input
						      					type="checkbox"
						      					key={filter.value}
						      					id={filter.value}
						      					name={filter.value}
						      					value={filter.value}
						      					onChange={this.filtersChanged}
						      				/>
							      			<label
							      				className="text-capitalize ml-1"
							      				htmlFor={filter.value}
							      				key={filter.value + '1'}>
							      				{filter.dispName}
							      			</label>
						      			</li>
					      			)

					      		})
					      	}
					      	</ul>
					      	<span className="text-italic">*If no filters are chosen, the search function will use the common name.</span>
				      	</div>
				      </Card.Body>
				    </Accordion.Collapse>
				  </Card>
				</Accordion>
			</div>
		);
	}
}

export default SearchBar;