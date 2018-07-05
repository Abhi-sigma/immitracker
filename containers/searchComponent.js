import React from "react";
import data from "./immi_data.js"
import latest_data from "./latest_data.js"
import styles from "./styles.css"


class SearchComponent extends React.Component{
	constructor(props){
		super(props);
		this.onSelectYear = this.onSelectYear.bind(this);
		this.onSelectMonth = this.onSelectMonth.bind(this);
		this.onSelectOccupation = this.onSelectOccupation.bind(this);

	}

	onSelectYear(event){
		const selected_year = event.target.value;
		const newState = (() => {
			let array_to_render = [];
			let selected_object = data[selected_year];
			for( var items in selected_object) {
				console.log(items);
				// console.log(selected_object[items]['data']['summary']['Total']);
					// console.log("insideif",items);
					array_to_render.push(
					<div  key = {selected_year+items} className = {styles.childContainer}>
					    <a key = {items} onClick = {this.props.updateDetailView}><h3>{items}</h3></a>
					</div>
					)

			 }

				return array_to_render
		})();
		// console.log(Object.keys(newState[selected]));
		this.props.selected_month ?
			this.props.updateSearchView({data:data,search_view:newState,selected_year:selected_year,
			latest_update:latest_data["update_date"],selected_month:"" }) :
			this.props.updateSearchView({data:data,search_view:newState,selected_year:selected_year,
			latest_update:latest_data["update_date"]})


		// console.log(this.state)
	}

	onSelectMonth(event){
		const selected_month = event.target.value;
		const newState = ( () => {
		if(!this.props.selected_year){
			alert("Please Select year first")
		}
		else{
			// alert(this.props.selected_year);
			// console.log(selected_month);
			// console.log(data[this.props.selected_year]);
			let selected_year_invitation_dates_array = Object.keys(data[this.props.selected_year]);
			// console.log(selected_year_invitation_dates_array)
			let monthly_invitation_array = [];
			for(let items in selected_year_invitation_dates_array){
				// console.log(selected_year_invitation_dates_array);
				const item_array = selected_year_invitation_dates_array[items];
				// console.log(item_array);
				// console.log(data[this.state.selected_year][item_array])
				if(selected_year_invitation_dates_array[items].toLowerCase().indexOf(selected_month) != -1){
					console.log("pushing");
					let index = selected_year_invitation_dates_array.indexOf(items);
					console.log(selected_month,
						selected_year_invitation_dates_array[items],
						selected_year_invitation_dates_array[items].toLowerCase().indexOf(selected_month))

				    monthly_invitation_array.push(
					<div key = {items+this.props.selected_year} className = {styles.childContainer}>
					    <a key = {item_array} onClick = {this.props.updateDetailView} ><h1>{item_array}</h1></a>
						{/*<li>Visa Class 189 :{data[this.props.selected_year][item_array]["data"]["189"]}</li>
						<li>Visa Class 489: {data[this.props.selected_year][item_array]["data"]["489"]}</li>*/}
					</div>
					)
				}

		  }
			  console.log("going to return");
			  console.log(monthly_invitation_array);
			  return monthly_invitation_array


		}
	})();	console.log(newState)
			if(newState.length != 0){
			    console.log(newState);
				this.props.updateSearchView({search_view:newState,
				selected_year:this.props.selected_year,
				selected_month:selected_month,
				latest_update:latest_data["update_date"]
			});
		   }
		   else{
		   	    this.props.updateSearchView({ search_view:"No Records Found",
				selected_year:this.props.selected_year,
				selected_month:selected_month,
				display_data:latest_data,
				latest_update:latest_data["update_date"]

			     })

		   }
		}




		onSelectOccupation(event){
		   let year  = this.props.selected_year
		   let occupation = event.target.value;
		   let occupation_points_object= {};
		   occupation_points_object[occupation] = {};
		   const keys  = Object.keys(this.props.data[year]);
		   const occupation_points_array = keys.map((date,index) => {
		   	// console.log(this.props.data[year][date].data);
		   	// console.log(this.props.data[year][date].data["occupation-cut-off"][occupation].points);
		   	let points = (() => {
		   		if(this.props.data[year][date].data != undefined){
		   			console.log(date,"passed 1st")
			   		if(this.props.data[year][date].data["occupation-cut-off"] != undefined){
			   			console.log(date,"passed 2nd");
			   			if(this.props.data[year][date].data["occupation-cut-off"][occupation] != undefined){
				   			console.log(date,"passed 3rd");
				   			console.log(this.props.data[year][date].data["occupation-cut-off"])
				   			return this.props.data[year][date].data["occupation-cut-off"][occupation].points
				   		      }
				   		else{
				   			return "not available"
				   		}

			   		}
			   		else{
			   			console.log(date,"failed 2nd")
			   			return "not available"


			   		}
		   		}
		   		else{
		   			console.log(date,"failed 1st")
		   			return "not available"
		   		}
		   	})(); //called iife function points
		   	console.log(date,points);
		   	occupation_points_object[occupation][date] = points;
		   	return (
		   	 	<li key ={index+date}>{date}:{points}</li>
		   	 	)
		   	});

		   console.log(occupation_points_array);
           this.props.updateOccupationView({occupation_view:occupation_points_array,
           occupation_view_object:occupation_points_object})
       }



	render(){
		return(
		<div className = {styles.searchComponent}>
		<a>
			<div  onClick = {this.props.latestLink }>
				Latest Invitation Date:<span className = {styles.childContainer}>
				{this.props.latest_update}</span>
			</div>
		</a>
			<span>Select Year</span>
			<select  value = {this.props.selected_year?this.props.selected_year:"0"} onChange = {this.onSelectYear}>
			    <option value = "0" >Select Year</option>
				<option value = "2016">2016</option>
                <option value = "2017">2017</option>
                <option value = "2018">2018</option>
			</select>
			<span>Select Month</span>
			<select value = {this.props.selected_month?this.props.selected_month:"0"}  onChange = {this.onSelectMonth}>
				<option value = "0">Select Month</option>
				<option value = "jan">January</option>
                <option value = "feb">February</option>
                <option value = "mar">March</option>
                <option value = "april">April</option>
                <option value = "may">May</option>
                <option value = "june">June</option>
                <option value = "july">July</option>
                <option value = "august">August</option>
                <option value = "sept">September</option>
                <option value = "oct">October</option>
                <option value = "nov">November</option>
                <option value = "dec">December</option>
			</select>
		    {/*display select occupation only when year is selected  */}
			<div>
			{this.props.selected_year?
			(<div>
				<fieldset>
				<label>Select Occupation</label>
				<select onChange = {this.onSelectOccupation} disabled = {this.props.selected_month ||this.props.selected_month == "0" ||"" ?true:false}>
				<option value = "">Select Occupation</option>
				{this.props.occupation.map((item,index) => <option value = {item} key = {index} >{item} </option>)}
				</select>
				</fieldset>
			</div>):null}
			<div className = {styles.instruction_select_dates}>
					{this.props.search_view?this.props.search_view:this.props.data}
			</div>


			</div>



        </div>


		)
	}
}

export default SearchComponent