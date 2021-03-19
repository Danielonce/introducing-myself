const videoBackground = document.querySelector('.videoBackground');
const contact = document.querySelector('.contact');
const btn = document.querySelector('.btn');


const screenSizeEval = () => {
  if (window.innerWidth > 480) {
    videoBackground.setAttribute("src", "../assets/obeleye.mp4");
  } else videoBackground.setAttribute("src", "../assets/obeleye-mobile.mp4");
}

btn.addEventListener('click', () => {
  contact.classList.toggle('social')
})

window.addEventListener('resize', () => screenSizeEval())
window.addEventListener('DOMContentLoaded', () => screenSizeEval())

videoBackground.addEventListener('canplay', () => {
  videoBackground.play()
});
