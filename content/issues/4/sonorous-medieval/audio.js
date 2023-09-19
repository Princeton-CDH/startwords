/* simple audio play button logic for figure 6 */
window.onload = (event) => {
  const audioPlayButtons = document.querySelectorAll("button.play");

  audioPlayButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const audio = event.target.previousElementSibling;
        audio.play();
  });
});
};
