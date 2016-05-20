import React from 'react'
import ReactDOM from 'react-dom'

document.write(require("./content.js"))

require("jquery");
require("bootstrap-sass");
require("font-awesome");

// require("animate.css");
// require("wow");
// require("html5shiv");
// require("respond");
require("./bower_components/isInViewport/lib/isInViewport.min.js");

//Componente personalizado de video
var videoModulo = require("./modules/video");

videoModulo.createVideo("video-container","video1","1000","http://static.zara.net/video//V2016/campaign/video-woman.st.mp4?1463095232000","http://static.zara.net/static//V2016/collage/07-1-campaign-woman-large/desktop-video-woman-mp4.st.jpg?1463095232000",true);
videoModulo.createVideo("video2-container","video2","900","http://static.zara.net/video//V2016/campaign/video-woman.st.mp4?1463095232000","http://static.zara.net/static//V2016/collage/07-1-campaign-woman-large/desktop-video-woman-mp4.st.jpg?1463095232000",true);

require("./scss/styles.scss");

// Import component
import TitleComponent from './components/title/react-title'
import ImageComponent from './components/image/react-image'
ReactDOM.render(<TitleComponent />, document.getElementById('title-container'))
ReactDOM.render(<ImageComponent src="http://static.zara.net/static///V2016/collage/16-4-mondaytofriday-woman-large/look2-look2.st.jpg?1463754447000" social="true" />, document.getElementById('image-container'))
ReactDOM.render(<ImageComponent src="http://static.zara.net/static///V2016/collage/16-4-mondaytofriday-woman-large/look5-look5.st.jpg?1463754447000" social="true" />, document.getElementById('image2-container'))
