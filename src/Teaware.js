import React from 'react';
import data from "./data.js"
import TeaItems from "./teaitem.js"


var Teaware = React.createClass({
  getInitialState: function(){
	  return {
	  	teawareList:{}
	  }
	},

  componentWillMount:function(){
    var arrTeaware = data.getTeaware()
      console.log(arrTeaware)
    this.setState({teawareList:arrTeaware})
  },

  render: function() {
    var arr = []
    
    if(this.props.params.product === 'BOCHA')
        { 
          arr.push(this.state.teawareList.herbal.map(
          teaware => <TeaItems 
          	category="herbal"
          	image={a.image}
          	name={a.name}
          	price={a.price}
          	description={a.description}
          	ingredients={a.ingredients} />
        ))}
    return (
      <div >
      		<h1> Teaware Page </h1>
          <ul className="arrUl">  
            {arr}
          </ul>

       </div>
    )
  }
})


export default Teaware;