import React from "react";
import latest_data from "./latest_data.js"
import styles from "./styles.css"


class RecentUpdate extends React.Component{
	render(){
		return (
			<div className = {styles.main_container}>
				<h1 className = {styles.main_heading}>Latest Update:{this.props.display_data["update_date"]
				                                        ?this.props.display_data["update_date"]:
				                                        this.props.selected_date +" " + this.props.selected_year}</h1>

				{this.props.display_data["summary"] != undefined?
					(
						<div className = {styles.main_heading}>
							<span>Total till date in the year:</span>{this.props.display_data['summary']['Total']}
						</div>
					):<div className = {styles.main_heading}>Total:No Records</div>
			    }

				{this.props.display_data['189'] != undefined?
				(
					<div className = {styles.main_heading}>
						<span>Visa Class 189:</span>{this.props.display_data['189']}
					</div>
						):<div className = {styles.main_heading}>Visa 189:No Records</div>
			    }

			    {this.props.display_data['489'] != undefined?(
                       <div className = {styles.main_heading}>
	                       <span>Visa Class 489:</span>{this.props.display_data['489']}
	                    </div>
			    	):<div className = {styles.main_heading}>Visa 489:No Records</div>
			    }

				<h2  className = {styles.main_heading}>Pro Rata Occupations Cut off Scores</h2>
				<div className = {styles.headingContainer} >
				<div className = {styles.childContainerDisplay}>Occupation</div>
				<div className = {styles.childContainerDisplay}>Cut-off-score</div>
				<div className = {styles.childContainerDisplay}>Last date of Effect</div>
                <div>
	                {this.props.display_data["occupation-cut-off"] != undefined?
	                	Object.keys(this.props.display_data["occupation-cut-off"]).map((item,index) => {
                      return(
                      	<div key ={index} >
                      	<span  key = {"item"+index} className = {styles.childContainerDisplay} >{item}</span>
                      	<span key = {"points"+index} className = {styles.childContainerDisplay} >{this.props.display_data["occupation-cut-off"][item]["points"]}</span>
                      	<span key = {"date"+index} className = {styles.childContainerDisplay} >{this.props.display_data["occupation-cut-off"][item]["date"]}</span>
                      	</div>
                      	)
	                    }):(
	                         <div>
		                      <span className = {styles.childContainerDisplay} >No Records</span>
	                      	  <span className = {styles.childContainerDisplay} >No Records</span>
	                      	  <span className = {styles.childContainerDisplay} >No Records</span>
	                      	  </div>
                      	  )
                     }

                </div>




				</div>


			</div>)
	}

}


export default RecentUpdate