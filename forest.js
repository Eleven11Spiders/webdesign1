var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#forest button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "остановлено";
}
vid.addEventListener('ended', function()
{
vid.pause();
vidFade();
}); 
pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "остановить";
  } else {
    vid.pause();
    pauseButton.innerHTML = "остановлено";
  }
})