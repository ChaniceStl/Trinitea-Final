import React from "react"

var SingleTea = React.createClass({
	render:function(){
		return(
				<div>

					<img src={this.props.image}/>
					<p>{this.props.price}</p><br/>
					<p>{this.props.description}</p>
					<p>{this.props.ingredients}</p>				
				</div>
			)
	}
})

export default SingleTea;