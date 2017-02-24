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
  } else if (window.ActiveXObject) {
    var WsShell = new window.ActiveXObject('WScript.Shell')
    WsShell.SendKeys('{F11}')
  }
}

/**
*退出全屏显示
*/
function exitFullScreen () {
  console.log(document.msExitFullscreen)
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (window.ActiveXObject) {
    var wscript = new window.ActiveXObject('WScript.Shell')
    wscript.SendKeys('{F11}')
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
