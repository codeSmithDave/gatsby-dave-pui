import React from "react";
// import { Link } from "gatsby";
import { graphql } from 'gatsby';
// import Img from "gatsby-image";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import DexImage from "../components/DexImage";
import SearchBar from "../components/SearchBar";
// import Modal from 'react-bootstrap/Modal';
import BoxContentOuter from "../components/BoxContentOuter";

import './scss/aquariumEncyclopedia.scss';

class AquariumEncyclopedia extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			dbFish: [
				{
					id: '0',
					scientificName: 'amphiprion ocellaris',
					commonName: 'ocellaris clownfish',
					careLevel: 'easy',
					maxSize: '3"',
					minTank: '20 gallons',
					temperament: 'peaceful',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'pomacentridae',
					waterType: 'saltwater',
					imgPath: this.props.data.clownFish.childImageSharp.fluid.src
				},
				{
					id: '1',
					scientificName: 'chelmon rostratus',
					commonName: 'copperband butterflyfish',
					careLevel: 'difficult',
					maxSize: '8"',
					minTank: '125 gallons',
					temperament: 'peaceful',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'chaetodontidae',
					waterType: 'saltwater',
					imgPath: this.props.data.copperbandTang.childImageSharp.fluid.src
				},
				{
					id: '2',
					scientificName: 'chrysiptera parasema',
					commonName: 'yellowtail damselfish',
					careLevel: 'easy',
					maxSize: '2¾"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'pomacentridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowtailDamsel.childImageSharp.fluid.src
				},
				{
					id: '3',
					scientificName: 'zebrasoma flavescens',
					commonName: 'yellow tang',
					careLevel: 'easy',
					maxSize: '8"',
					minTank: '100 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'herbivore',
					family: 'acanthuridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowTang.childImageSharp.fluid.src
				},
				{
					id: '4',
					scientificName: 'Pterophyllum',
					commonName: 'zebra angelfish',
					careLevel: 'easy',
					maxSize: '6"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '75-82° F, KH 1-5, pH 5.8-7.0',
					diet: 'omnivore',
					family: 'Cichlidae',
					waterType: 'freshwater',
					imgPath: this.props.data.angelfishFreshwater.childImageSharp.fluid.src
				},
				{
					id: '5',
					scientificName: 'chelmon rostratus',
					commonName: 'copperband butterflyfish',
					careLevel: 'difficult',
					maxSize: '8"',
					minTank: '125 gallons',
					temperament: 'peaceful',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'chaetodontidae',
					waterType: 'saltwater',
					imgPath: this.props.data.copperbandTang.childImageSharp.fluid.src
				},
				{
					id: '6',
					scientificName: 'chrysiptera parasema',
					commonName: 'yellowtail damselfish',
					careLevel: 'easy',
					maxSize: '2¾"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'pomacentridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowtailDamsel.childImageSharp.fluid.src
				},
				{
					id: '7',
					scientificName: 'zebrasoma flavescens',
					commonName: 'yellow tang',
					careLevel: 'easy',
					maxSize: '8"',
					minTank: '100 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'herbivore',
					family: 'acanthuridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowTang.childImageSharp.fluid.src
				},
				{
					id: '8',
					scientificName: 'Pterophyllum',
					commonName: 'zebra angelfish',
					careLevel: 'easy',
					maxSize: '6"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '75-82° F, KH 1-5, pH 5.8-7.0',
					diet: 'omnivore',
					family: 'Cichlidae',
					waterType: 'freshwater',
					imgPath: this.props.data.angelfishFreshwater.childImageSharp.fluid.src
				},
				{
					id: '9',
					scientificName: 'chelmon rostratus',
					commonName: 'copperband butterflyfish',
					careLevel: 'difficult',
					maxSize: '8"',
					minTank: '125 gallons',
					temperament: 'peaceful',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'chaetodontidae',
					waterType: 'saltwater',
					imgPath: this.props.data.copperbandTang.childImageSharp.fluid.src
				},
				{
					id: '10',
					scientificName: 'chrysiptera parasema',
					commonName: 'yellowtail damselfish',
					careLevel: 'easy',
					maxSize: '2¾"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'pomacentridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowtailDamsel.childImageSharp.fluid.src
				},
				{
					id: '11',
					scientificName: 'zebrasoma flavescens',
					commonName: 'yellow tang',
					careLevel: 'easy',
					maxSize: '8"',
					minTank: '100 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'herbivore',
					family: 'acanthuridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowTang.childImageSharp.fluid.src
				},
				{
					id: '12',
					scientificName: 'Pterophyllum',
					commonName: 'zebra angelfish',
					careLevel: 'easy',
					maxSize: '6"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '75-82° F, KH 1-5, pH 5.8-7.0',
					diet: 'omnivore',
					family: 'Cichlidae',
					waterType: 'freshwater',
					imgPath: this.props.data.angelfishFreshwater.childImageSharp.fluid.src
				},
				{
					id: '13',
					scientificName: 'chelmon rostratus',
					commonName: 'copperband butterflyfish',
					careLevel: 'difficult',
					maxSize: '8"',
					minTank: '125 gallons',
					temperament: 'peaceful',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'chaetodontidae',
					waterType: 'saltwater',
					imgPath: this.props.data.copperbandTang.childImageSharp.fluid.src
				},
				{
					id: '14',
					scientificName: 'chrysiptera parasema',
					commonName: 'yellowtail damselfish',
					careLevel: 'easy',
					maxSize: '2¾"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'carnivore',
					family: 'pomacentridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowtailDamsel.childImageSharp.fluid.src
				},
				{
					id: '15',
					scientificName: 'zebrasoma flavescens',
					commonName: 'yellow tang',
					careLevel: 'easy',
					maxSize: '8"',
					minTank: '100 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '72-78° F, dKH 8-12, pH 8.1-8.4, sg 1.020-1.025',
					diet: 'herbivore',
					family: 'acanthuridae',
					waterType: 'saltwater',
					imgPath: this.props.data.yellowTang.childImageSharp.fluid.src
				},
				{
					id: '16',
					scientificName: 'Pterophyllum',
					commonName: 'zebra angelfish',
					careLevel: 'easy',
					maxSize: '6"',
					minTank: '30 gallons',
					temperament: 'semi-aggressive',
					waterConditions: '75-82° F, KH 1-5, pH 5.8-7.0',
					diet: 'omnivore',
					family: 'Cichlidae',
					waterType: 'freshwater',
					imgPath: this.props.data.angelfishFreshwater.childImageSharp.fluid.src
				}
			],
			displayFish: [],
			searchFilter: [],
			searchTerm: '',
			filterisOpen: false
		};

		this.updateSearch = this.updateSearch.bind(this);
		this.updateSearchFilter = this.updateSearchFilter.bind(this);
	}

	componentDidMount(){
		this.setState({
			displayFish: this.state.dbFish
		});
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		// console.log(this.state.canvasCtx);

	}

	//updateSearch is used to display specific fish (it updates the displayFish state)
	//based on the user's search terms
	updateSearch(term){
		let fishArray = this.state.dbFish;

		let result = fishArray.filter(fish => {
			let match = false;

			//if the user selected any filters, use them to search for fish
			if(this.state.searchFilter.length > 0){
				this.state.searchFilter.forEach(filter => {
					if(fish[filter].includes(term.toLowerCase())){
						match = true;
					}
				});
			}
			//if the user didn't select any search filters, use the common name as default
			else{
				if(fish['commonName'].includes(term.toLowerCase())){
					match = true;
				}
			}

			if(match) return true;
			else return false;
		});

		this.setState({
			displayFish: result,
			searchTerm: term
		});
	}

	//updateSearchFilter makes sure we have a list of the latest selected search filters
	//if a filter is de-selected, it will be removed from our filter state
	updateSearchFilter(filter, checked){
		//the user just selected a filter, add it to the list
		if(checked === true){
			this.setState(prevState => ({
				searchFilter: [...prevState.searchFilter, filter]
			}));
		}
		//the user just deselected a filter, remove it from out list
		else{
			let newFilter = this.state.searchFilter.filter(fil => {
				if(fil !== filter) return fil;

				return '';
			});

			this.setState({
				searchFilter: newFilter
			});
		}
	}

	render(){
		return(
			<Layout>
			    <SEO title="Aquarium Encyclopedia" />
			    <div className="aquarium-encyclopedia-container pt-5 pb-5">

					<div className="inner-aquarium-encyclopedia pt-5 pb-5 pl-3 pr-3 container-md">
						<SearchBar
							updateSearch={this.updateSearch}
							searchFilters={['scientificName', 'commonName', 'waterType']}
							filterDispName={
								[
									{
										value: 'scientificName',
										dispName: 'scientific Name'
									},
									{
										value: 'commonName',
										dispName: 'common name'
									},
									{
										value: 'waterType',
										dispName: 'water type'
									}
								]
							}
							updateSearchFilter={this.updateSearchFilter}
							className="d-block ml-auto mr-auto mb-3"
						/>

						<div className="content-container">
							<BoxContentOuter>
								{
									this.state.displayFish.map((fish) => {
										return (
											<li
												key={fish.id}
												className="mb-4 col-8 ml-auto mr-auto col-sm-5 col-md-3
												col-lg-2 ml-sm-2 mr-sm-2 p-0"
											>
												<DexImage
													key={fish.id}
													imgPath={fish.imgPath}
													title={fish.commonName}
													careLevel={fish.careLevel}
													maxSize={fish.maxSize}
													temperament={fish.temperament}
													minTank={fish.minTank}
													waterConditions={fish.waterConditions}
													diet={fish.diet}
													family={fish.family}
													waterType={fish.waterType}
													scientificName={fish.scientificName}
												/>
											</li>
										)
									})
								}
							</BoxContentOuter>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default AquariumEncyclopedia;

export const query = graphql`
  query {
    copperbandTang: file(relativePath: {eq: "aquarium-encyclopedia/copperband_butterflyfish.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    clownFish: file(relativePath: {eq: "aquarium-encyclopedia/ocellaris_clownfish.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    yellowtailDamsel: file(relativePath: {eq: "aquarium-encyclopedia/yellowtail_damsel.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    yellowTang: file(relativePath: {eq: "aquarium-encyclopedia/yellow_tang.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    angelfishFreshwater: file(relativePath: {eq: "aquarium-encyclopedia/angelfish.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`