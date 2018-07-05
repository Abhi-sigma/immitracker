import App from '../containers/app.js'
import RecentUpdate from '../containers/recentUpdate.js'
import SearchComponent from '../containers/searchComponent.js'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import React from "react";
import data from '../containers/immi_data.js'
import latest_data from "../containers/latest_data.js"
// console.log(latest_data)

ReactDOM.render (
	<App />, document.getElementById("index"));