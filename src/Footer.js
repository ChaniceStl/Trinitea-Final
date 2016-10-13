import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory,IndexRoute} from 'react-router';

var Footer = React.createClass({
  render: function() {
    return (
  		<div>
	    <footer className="footer">
      <div className="containerFooter">
        <p>TriniTea &copy; 2016</p>
      </div>
    </footer>
       	</div>
    )
  }
})

export default Footer