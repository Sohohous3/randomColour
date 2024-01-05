
function setColour() {
    document.body.addEventListener("mousemove", function(e) {
        let y = Math.round(e.clientY / window.innerHeight * 255);
        let x  = Math.round(e.clientX / window.innerWidth * 255);
        let rgbColor = `rgb(${x}, ${y}, 0)`;
        document.body.style.backgroundColor = rgbColor;
    });
}
document.addEventListener("DOMContentLoaded", () => {
    setColour();
});
