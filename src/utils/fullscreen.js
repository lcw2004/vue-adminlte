/**
* 全屏显示
*/
function fullScreen (element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}

/**
*退出全屏显示
*/
function exitFullScreen () {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

/**
* 获取当前全屏元素
*/
function getFullScreenElement () {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
}

/**
* 判断当前是否在全屏状态
*/
function isInFullScreen () {
  return getFullScreenElement() != null
}

/**
* 切换全屏状态
*/
function toggleFullScreen (element) {
  if (isInFullScreen()) {
    exitFullScreen()
  } else {
    fullScreen(element)
  }
}

export {isInFullScreen, toggleFullScreen}
