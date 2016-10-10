import React from 'react';
import data from './data.js';

var About = React.createClass({
  getInitialState: function(){
  	return({storeProps:{}})
  },
  componentWillMount:function(){
  	var info = data.getAbout()
  	this.setState({storeProps:info})
  },
  render: function() {
    return (
      <div id = "about-page" className ="text-center">
    	<div id ="blackbox">
        <h1><strong><u>About Us</u></strong></h1>
          <div id ='blackbox-text'>
        <p>{this.state.storeProps.trinitea_slogan}</p>
        <p>{this.state.storeProps.trinitea_philosophy_intro}</p>
        <p>{this.state.storeProps.trinitea_philosophy_think}</p>
        <p>{this.state.storeProps.trinitea_philosophy_drink}</p>
        <p>{this.state.storeProps.trinitea_philosophy_live}</p>
        <h1><strong><u>Contact</u></strong></h1><br/>
     	 <p>{this.state.storeProps.trinitea_address}</p>
      	   <p>{this.state.storeProps.trinitea_email}</p>
     	     <p>{this.state.storeProps.trinitea_phone}</p>
          </div>
      </div>
      </div>
    )
  }
});

export default About