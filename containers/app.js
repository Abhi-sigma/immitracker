import React from "react";
import RecentUpdate from '../containers/recentUpdate.js'
import SearchComponent from '../containers/searchComponent.js'
import OccupationView from '../containers/occupationView.js'
import styles from "./styles.css"
import latest_data from "../containers/latest_data.js"
import data from "./immi_data.js"
class App extends React.Component{
	constructor(props){
		super(props);
		this.occupation_array = ["Accountants", "Auditors, Company Secretaries and Corporate Treasurers",
		"Computer Network Professionals", "Electronics Engineer", "ICT Business and System Analysts", "Industrial, Mechanical and Production Engineers", "Other Engineering Professionals", "Software and Applications Programmers"]
		this.state = {data:"select the dates to see more detailed reports",
		display_data :latest_data,
	    latest_update:latest_data["update_date"]};
		this.updateDetailView = this.updateDetailView.bind(this);
		this.updateSearchView = this.updateSearchView.bind(this);
		this.latestLink = this.latestLink.bind(this);
		this.updateOccupationView = this.updateOccupationView.bind(this);



	}

	updateDetailView(event){
                this.setState({display_data:this.state.data[this.state.selected_year][event.target.innerText]["data"],
                	selected_date:event.target.innerText,latest_update:latest_data["update_date"]});
				// this.setState({display_data:this.state.data[this.state.selected_year][event.target.innerText]})


	}

	latestLink(event){
		 this.setState({display_data:latest_data});
		 // alert("clicked");



	}

	updateOccupationView(state){
		this.setState(state)
	}



	updateSearchView(state){
		this.setState(state)

	}
	render(){
		// console.log(this.state);
		return(
			<div>
				<SearchComponent {...this.state} updateSearchView = {this.updateSearchView}
				updateDetailView = {this.updateDetailView} latestLink = {this.latestLink}
				occupation = {this.occupation_array} updateOccupationView = {this.updateOccupationView}/>
				<RecentUpdate {...this.state} updateDetailView = {this.updateDetailView}/>
				{this.state.occupation_view_object?
				<OccupationView updateOccupationView = {this.updateOccupationView}
				occupation_object = {this.state.occupation_view_object} />:null}


			</div>
			)
	     }

}



export default App
