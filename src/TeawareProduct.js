import React from "react"
import data from "./data.js"
import TeawareProductPage from "./TeawareProductPage.js"


var TeawareProduct = React.createClass({
	getInitialState: function(){
	  return {
	  	teawareList:[]
	  }
	},

	componentWillMount:function(){
	var arrTeaware = data.getTeaware()
	  console.log(arrTeaware)
	this.setState({teawareList:arrTeaware})
	},

	render:function(){
		var output = this.state.teawareList.map((teaware, idx) => {
			console.log(teaware)
			console.log(idx)
			if(this.props.params.product === teaware.name){
				return	 <TeawareProductPage key={idx} image={teaware.image} name={teaware.name} price={teaware.price} />
			}
		})
		return(
				<div>

					{output}		

				</div>
			)
	}
})

export default TeawareProduct