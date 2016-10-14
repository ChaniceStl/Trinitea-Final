import React from 'react';
import {Link} from "react-router"

var TeawarePreview = React.createClass({
	render: function(){
	var divStyle = {
            backgroundImage: 'url(' + this.props.image + ')'
        }
	var bgStyle = {
			backgroundImage: 'url(' + '"http://img.wallpaperfolder.com/f/5574BC310A55/tea-fields-images.jpg"' + ')'
	}	
		return(
			<div style ={bgStyle}>
				<div className = "teaColumns">
        			<div className="col-lg-4 col-xs-4">
          				<div className="panel panel-default">
            				<div className="panel-heading">
            				<h4>{this.props.name}</h4>
            				</div>
            				<div className="panel-body" style={divStyle}>
            				</div>
            				<Link to={"/Teaware/"+ this.props.name}><a  className="btn btn-default" href="#" role="button"><p>More information &raquo;</p></a></Link>
          				</div>
					</div>
				</div>
			</div>
			)
	}
})

export default TeawarePreview