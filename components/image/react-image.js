'use strict';

import React from 'react'

class ImageComponent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
  var divStyle = {
    width: '800px',
    height: '800px',
    color: 'white',
    backgroundImage: 'url('+this.props.src+')',
    marginBottom:'70px'
  };
  var socialStyle = {
    position: 'relative',
    textAlign: 'right',
    top: '100%',
    color:'#000',
    paddingTop:'15px'
  };

    return (
        <div style={divStyle}>
          <div style={socialStyle}>
            <i className="fa fa-2x fa-pinterest" aria-hidden="true"></i>&nbsp;&nbsp;
            <i className="fa fa-2x fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;
            <i className="fa fa-2x fa-youtube" aria-hidden="true"></i>
          </div>
        </div>
    )
  }
}

export default ImageComponent
