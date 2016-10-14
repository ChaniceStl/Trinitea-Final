import React from 'react';
import data from "./data.js"
import TeawareList from "./TeawareList.js"


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
      arr.push(this.state.teawareList.map( teaware => <TeawareList 
		  	image={teaware.image}
		  	name={teaware.name}
		  	price={teaware.price}
		  	/>
      ))

    return (
      <div >
          <ul className="arrUl">  
            {arr}
          </ul>

       </div>
    )
  }
})


export default Teaware;