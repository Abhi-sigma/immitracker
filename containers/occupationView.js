import React from "react";
import styles from "./styles.css"
import moment from 'moment';
import {Bar} from "react-chartjs"

class OccupationView extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
	var occupation = Object.keys(this.props.occupation_object);
	var object = this.props.occupation_object[occupation];
	var dates =  Object.keys(this.props.occupation_object[occupation]);
	var points_array = []
	var points = dates.map(function(item){
		// console.log("dates",item);
		// console.log(object[item]);
		if(isNaN(parseInt(object[item]))){
			console.log("NaN",object[item]);
			points_array.push(0);
		}
		else{
			console.log("points",object[item]);
			points_array.push(object[item])
		}
		return points_array
	});
	console.log(points_array);
	// console.log(occupation);
	var data = {
	labels: dates,
	datasets: [
		{
			label: "My First dataset",
			fillColor: "#add8e6",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: points_array
		}
	],
	options:{
		scales:{
			xAxes:[{
				stacked:true,
				ticks:{
					callback:function(label,index,labels){
						return label?label:'';
					}
				}

			}],
			yAxes:[{
				ticks:{
					min:60,
					max:100
				}
			}]
		}

	}

};
		return (
			<div>
			<div>{this.props.occupation_array}</div>
			<Bar data= {data} width = "600" height = "300"></Bar>
			<section className = {styles.searchComponent}>
	             <div className = {styles.sponsored} >Powered By:</div>
	             <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90dfn2irwyOcYJw3gZpUiwPNBhJcQXilmJ0EeiavO12tTPiOO3w"/>
	             <div>Currently looking for sponsors to maintain the site</div>
             </section>
			</div>
			)
	}
}

export default OccupationView