import React from 'react';
import ReactDOM from 'react-dom';
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
            if(this.props.params.name === 'black')
        { 
          arr.push(this.state.menuList.black.map(
          a =>  

          <div class="container">
            <h1>Black Tea</h1>
              <div class="row">
                <div class="row-height">
                  <div class="col-xs-4 col-lg-4" id="columns">
                    <div class="inside inside-full-height">
                      <div class="content">
                        <h2><TeaItems name={a.name} /></h2>
                        <p><TeaItems description={a.description}/></p>
                        <a className="btn btn-default" href="#" role="button">
                          <TeaItems price = {a.price}/> &raquo;</a>
                      </div>
                    </div>
                  </div>
                    <div class="col-xs-6 col-sm-3 col-sm-height col-sm-top">
                      <div class="inside inside-full-height">
                        <div class="content">
                        </div>
                      </div>
                    </div>
                      <div class="col-xs-6 col-sm-2 col-sm-height col-sm-middle">
                        <div class="inside inside-full-height">
                          <div class="content">
                          </div>
                        </div>
                      </div>
                        <div class="col-xs-6 col-sm-1 col-sm-height col-sm-bottom">
                          <div class="inside inside-full-height">
                            <div class="content">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>))}
              return (
      <div>
          <ul className="arrUl">  
            {arr}
          </ul>

       </div>
    )}}})
export default DisplayTea