/**
* 全屏显示
*/
function fullScreen (element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.msRequestFullscreen){
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

/**
*退出全屏显示
*/
function exitFullScreen () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

let isFullScreen = false;
function toggoleFullScreen (element) {
  if (isFullScreen) {
    exitFullScreen()
  } else {
    fullScreen(element)
  }
}

export fullScreen
export exitFullScreen
