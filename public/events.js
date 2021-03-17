const videoBackground = document.querySelector('.videoBackground');

const screenSizeEval = () => {
  if (window.innerWidth > 480) {
    videoBackground.setAttribute("src", "obeleye.mp4");
  } else videoBackground.setAttribute("src", "obelisco.mp4");
}

window.addEventListener('resize', () => screenSizeEval())
window.addEventListener('DOMContentLoaded', () => screenSizeEval())

videoBackground.addEventListener('canplay', () => {
  videoBackground.play()
});