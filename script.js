window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.body.style.paddingTop = '50px';  // Ajuste conforme necessário
  } else {
    document.body.style.paddingTop = '0';
  }
});
