/* simple audio play button logic for figure 6 */
window.onload = (event) => {
    const audioPlayButtons = document.querySelectorAll("button.play");

    audioPlayButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const audio = event.target.previousElementSibling;
            audio.play();
        });
    });

    const audio = document.querySelectorAll("audio");
    audio.forEach((audio) => {
        audio.addEventListener("play", (event) => {
            event.target.classList.add("playing");
        });
        audio.addEventListener("ended", (event) => {
            event.target.classList.remove("playing");
        });
    });
};
