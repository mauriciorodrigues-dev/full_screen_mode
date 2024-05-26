function entrarModoTelaCheia() {
  var elemento = document.documentElement;
  let opt = document.querySelector('.opt')

  if (elemento.requestFullscreen) {
      elemento.requestFullscreen();
      opt.display = 'none'
  } else if (elemento.mozRequestFullScreen) { /* Firefox */
      elemento.mozRequestFullScreen();
  } else if (elemento.webkitRequestFullscreen) { /* Chrome, Safari e Opera */
      elemento.webkitRequestFullscreen();
  } else if (elemento.msRequestFullscreen) { /* IE/Edge */
      elemento.msRequestFullscreen();
  }
}

window.onload = function() {
  var botao = document.querySelector("button");
  botao.click();
}
