import React from "react"
import data from "./data.js"
import SingleTea from "./singletea.js"
var TeaProduct = React.createClass({
	getInitialState: function(){
		return({menuList:[]})
	},
	componentWillMount:function(){
  	var info = data.getMenu()
    	console.log(info)
  	this.setState({menuList:info})
  },
	render:function(){
		var cata = this.props.params.category
		var product=this.props.params.product
	

		var output = this.state.menuList[cata].map((a,idx) => {
			console.log(a)
			console.log(idx)
			 if(product === a.name){
		return	 <SingleTea key={idx} image={a.image} name={a.name} price={a.price} description={a.description} ingredients={a.ingredients}/>
		}})
		return(
				<div>

					{output}		

				</div>
			)
	}
})

export default TeaProduct