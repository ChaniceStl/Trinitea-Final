import React from "react"

var SingleTea = React.createClass({
	render:function(){
		return(
				<div>
					<div className ="imagez">
					<img src={this.props.image} className="img-rounded pull-left gap-right"></img>
					</div>
					<div className="text">
					<div className="title"><h1>
					{this.props.name}</h1></div>
					<h4><div className="description">
					{this.props.description}</div></h4>
					<div className="ingredients">
					<h6>{this.props.ingredients}</h6><br/><br/>
				</div>
				</div>
				<span className="btn btn-primary singletea-btn" href="#" role="button"> {this.props.price} </span>
				</div>
			)
	}
})

export default SingleTea;