import React from 'react'
import ReactDOM from 'react-dom'

document.write("Mi primera entrada!<br><br>");
document.write(require("./content.js"))

require("jquery");
require("bootstrap-sass");
require("font-awesome");
// require("animate.css");
// require("wow");
// require("html5shiv");
// require("respond");

require("./scss/styles.scss");

// Import component
import MyComponent from './componentes/titulo/react-titulo'
import VideoComponent from './componentes/video/react-video'

ReactDOM.render(<MyComponent />, document.getElementById('container'))
ReactDOM.render(<VideoComponent src="http://static.zara.net/video//V2016/campaign/video-woman.st.mp4?1463186435000" />, document.getElementById('video-container'))



