window.addEventListener('keydown', function (e) {
  //console.log(e);
  const audio = document.getElementById("playSound");
  audio.currentTime = 0;
  audio.play();
});