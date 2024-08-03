// see more func 
function togglePopup(popupId) {
    document.getElementById(popupId).classList.toggle("active")
    document.body.classList.toggle("no-scroll");

}

// scroll to top
let btnTop = document.getElementById("btntop")

// jika scroll ke bawah > 100px dari atas maka munculkan button 
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTop.style.display = "block"
    }else {
        btnTop.style.display = "none"
    }
}

function btnTopFunc() {
    const scrollDuration = 800 //mili detik
    const scrollStep = -window.scrollY / (scrollDuration / 15)

    function smoothScroll () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep)
            requestAnimationFrame(smoothScroll)
        }
    }

    requestAnimationFrame(smoothScroll)
}