'use strict';

import React from 'react'

//require('../../bower_components/videojs/dist/video.min.js')
// import styles from '../../bower_components/videojs/dist/video-js.min.css';
// require("videojs");

class VideoComponent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
        <h3>Soy un modulo de video: {this.props.src}</h3>
    )
  }
}

export default VideoComponent
