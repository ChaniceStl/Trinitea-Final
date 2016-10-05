import React from 'react';
import {Link} from "react-router"

var TeaItems = React.createClass({
	render:function(){
		return(
		
			<li>
				<div>

					<img src={this.props.image}/>
					<Link to={"/Tea/"+ this.props.category +"/" + this.props.name}><p>Name:{this.props.name}</p></Link>
					<p>Price:{this.props.price}</p>
				</div>
			</li>
			)
	}
})

export default TeaItems