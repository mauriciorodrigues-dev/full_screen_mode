function entrarModoTelaCheia() {
  var elemento = document.documentElement;


  if (elemento.requestFullscreen) {
    elemento.requestFullscreen();

  } else if (elemento.mozRequestFullScreen) {
    /* Firefox */
    elemento.mozRequestFullScreen();
  } else if (elemento.webkitRequestFullscreen) {
    /* Chrome, Safari e Opera */
    elemento.webkitRequestFullscreen();
  } else if (elemento.msRequestFullscreen) {
    /* IE/Edge */
    elemento.msRequestFullscreen();
  }
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

window.onload = function () {
  var botao = document.querySelector("button");
  botao.click();
};
