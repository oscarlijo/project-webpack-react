require("../bower_components/videojs/dist/video-js.css");
var videojs = require("../bower_components/videojs/dist/video.js");

function createVideo(target,id,width,src,poster,playOnVW){

   $("#"+target).html('<video id="'+id+'" class="video-js" controls preload="auto" width="'+width+'" poster="'+poster+'" data-setup="{}"><source src="'+src+'" type="video/mp4"></source><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>');

   if(playOnVW===true) playVideoOnView(id);
}

function playVideoOnView(id){
   var myPlayer = videojs(id);
   myPlayer.controls(false);

   $(window).on("load resize scroll", function() {
      if ($("#"+id).is(":in-viewport")) {
          myPlayer.play();
      } else {
          myPlayer.pause();
      }
   });
}

exports.createVideo = createVideo;
