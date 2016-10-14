import React from 'react';
import data from "./data.js"
import TeaItems from "./teaitem.js"


var DisplayTea = React.createClass({
    getInitialState: function(){
    return({menuList:{}})
  },
    componentWillMount:function(){
    var info = data.getMenu()
      console.log(info)
    this.setState({menuList:info})
  },
  render: function() {
    var arr = []
    if(this.props.params.category === 'black')
        { 
          arr.push(this.state.menuList.black.map(
          a => <TeaItems category="black"image={a.image}name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
        ))}
    else if(this.props.params.category === 'green')
        { 
          arr.push(this.state.menuList.green.map(
          a => <TeaItems category="green" image={a.image}name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
        ))}
    else if(this.props.params.category === 'herbal')
        { 
          arr.push(this.state.menuList.herbal.map(
          a => <TeaItems category="herbal"image={a.image}name={a.name} price={a.price} description={a.description} ingredients={a.ingredients} />
        ))}
    return (
      <div >
          <ul className="arrUl">  
            {arr}
          </ul>

       </div>
    )
  }
})


export default DisplayTea;