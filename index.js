
const myObject = document.getElementById("sol-nuvens");

window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
    const screenWidth = window.innerWidth;
    // const pageHeight = document.body.clientHeight;
    const pageHeight = document.body.scrollHeight;
    const newPosition = 55 + (scrollY / pageHeight) * screenWidth;
    myObject.style.transform = `translateX(${newPosition}%)`;
    console.log(scrollY, pageHeight , newPosition)
    requestAnimationFrame(moveObject);
});
