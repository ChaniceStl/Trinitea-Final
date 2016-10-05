import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory,IndexRoute} from 'react-router';

// Styles
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
// Components
import Navbar from "./navbar.js";
import Home from "./Home.js";
import Tea from "./Tea.js";
import Teaware from "./Teaware.js";
import About from './About.js';
import Footer from './Footer.js';
import DisplayTea from "./displaytea.js"
import TeaProduct from "./teaproducts.js"



var App = React.createClass({
  render: function() {
    return (
    	<div id = "app-main">
        <Navbar />
        {this.props.children}
        <Footer />
      </div>  
    )
  }
})


ReactDOM.render(
 <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="/Tea" component={Tea}/>
      <Route path='/Tea/:category' component={DisplayTea}/>
     <Route path="/Tea/:category/:product" component={TeaProduct}/>
      <Route path="Teaware" component={Teaware}/>
     <Route path="About" component={About}/>
    </Route>
 </Router>,
  document.getElementById('root')
);
