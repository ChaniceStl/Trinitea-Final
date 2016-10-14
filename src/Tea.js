import React from 'react';
import {Link} from "react-router"

var Tea = React.createClass({
  render: function() {
    return (
      
     	
     	<div id="tea-grid" className="container-fluid">
     	
     		<div className="row">
<Link to="/Tea/black" id="black" className="col-md-4 col-xs-12 teaCol">
			  	<h2>Black Tea</h2>
		  	</Link>

			 <Link to="/Tea/green" id="green" className="col-md-4 col-xs-12 teaCol">
			  	<h2>GreenTea</h2>
			 </Link>

			 <Link to="/Tea/herbal" id="herbal" className="col-md-4 col-xs-12 teaCol">
			 	<h2>Herbal Tea</h2>
			 </Link>

			
		</div>

       </div>
    )
  }
})

export default Tea