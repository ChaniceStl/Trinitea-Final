// React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';

// Styles
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

// Main Layout Components
import Navbar from "./navbar.js";
import Footer from './Footer.js';
import Home from "./Home.js";
import About from './About.js';

// Tea Components
import Tea from "./Tea.js";
import DisplayTea from "./displaytea.js"
import TeaProduct from "./teaproducts.js"
import Teaware from "./Teaware.js";
import TeawareProduct from "./TeawareProduct.js";




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
      <Route path="/Home" component={Home} />
      <Route path="/Tea" component={Tea}/>
      <Route path='/Tea/:category' component={DisplayTea}/>
     <Route path="/Tea/:category/:product" component={TeaProduct}/>
      <Route path="Teaware" component={Teaware}/>
      <Route path="Teaware/:product" component={TeawareProduct}/>
     <Route path="About" component={About}/>
    </Route>
 </Router>,
  document.getElementById('root')
);
