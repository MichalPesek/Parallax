const parallax = document.getElementById("parallax")
const h2 = document.getElementById("h2")
window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    console.log('offset: ' + offset);
    console.log('offset * 0.7' + offset * 0.7);
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    h2.style.backgroundPositionY = offset * 0.6 + "px";
})