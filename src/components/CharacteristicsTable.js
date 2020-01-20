import React from "react";

class CharacteristicsTable extends React.Component{
	createRows(){
		// let rows = [];

		// Object.keys(this.props.info).forEach( (key) => {
		// 	console.log(`${key} : ${this.props.info[key]}`);
			
		// 	rows.push(
		// 		<tr>
		// 			<td><strong>{key}</strong></td>
		// 			<td>{this.props.info[key]}</td>
		// 		</tr>
		// 	);
		// });

		// return rows;



		// this.props.info.forEach((item) => {
			// console.log(item);
		// });
	}

	render(){
		return (
			<table>
				<tbody>
					<tr>
						<td><strong>Scientific Name</strong></td>
						<td>{this.props.scientificName}</td>
					</tr>
					<tr>
						<td><strong>Family</strong></td>
						<td>{this.props.family}</td>
					</tr>
					<tr>
						<td><strong>Care Level</strong></td>
						<td>{this.props.careLevel}</td>
					</tr>
					<tr>
						<td><strong>Temperament</strong></td>
						<td>{this.props.temperament}</td>
					</tr>
					<tr>
						<td><strong>Min Tank Size</strong></td>
						<td>{this.props.minTank}</td>
					</tr>
					<tr>
						<td><strong>Max Size</strong></td>
						<td>{this.props.maxSize}</td>
					</tr>
					<tr>
						<td><strong>Water Conditions</strong></td>
						<td>{this.props.waterConditions}</td>
					</tr>
					<tr>
						<td><strong>Diet</strong></td>
						<td>{this.props.diet}</td>
					</tr>
					<tr>
						<td><strong>Water Type</strong></td>
						<td>{this.props.waterType}</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default CharacteristicsTable;

// export const query = graphql`
//   query {
//     file(relativePath: {eq: "gatsby-icon.png"}) {
//       childImageSharp {
//         fluid(maxWidth: 100, maxHeight: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `