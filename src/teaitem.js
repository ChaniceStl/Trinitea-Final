import React from 'react';
import {Link} from "react-router"

var TeaItems = React.createClass({
	render:function(){
		return(
			<li>
<div className="row container">
  <div className="row-height">
    <div className="col-xs-3">

        <Link to={"/Tea/"+ this.props.category +"/" + this.props.name}><p>Name:{this.props.name}</p></Link>
        </div>
      </div>
   
</div>
			{
					// <img src={this.props.image}/>
					// <Link to={"/Tea/"+ this.props.category +"/" + this.props.name}><p>Name:{this.props.name}</p></Link>
					// <p>Price:{this.props.price}</p>
			}
						
			</li>
			)
	}
})

export default TeaItems