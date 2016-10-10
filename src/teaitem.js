import React from 'react';
import {Link} from "react-router"

var TeaItems = React.createClass({
	render:function(){
var divStyle = {
            backgroundImage: 'url(' + this.props.image + ')'
        }
		return(
				<div className = "teaColumns">
        <div className="col-md-4 col-xs-4">
          <div className="panel panel-default">
            <div className="panel-heading"><h4>{this.props.name}</h4></div>
            <div className="panel-body" style={divStyle}></div>
            <a className="btn btn-default" href="#" role="button"><Link to={"/Tea/"+ this.props.category +"/" + this.props.name}><p>More information &raquo;</p></Link> </a>
          </div>
				</div>
				</div>
			)
	}
})
        		{
					// <img id = "teaImgs" src={this.props.image}/>
					// <Link to={"/Tea/"+ this.props.category +"/" + this.props.name}><p>Name:{this.props.name}</p></Link>
					// <p>Price:{this.props.price}</p>
				}

export default TeaItems