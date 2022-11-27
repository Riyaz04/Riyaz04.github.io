const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");


const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar());

let flipper = document.querySelector(".flipper");
mobile_nav.addEventListener("click", function() {
    if (flipper.style.display === "none") {
        flipper.style.display = "block";
    } else {
        flipper.style.display = "none";
    }
})











// reply comment show code 

const reply = (res) => {
    var res = document.getElementById(res);
    console.log(res);
    if (res.className == "replies") {
        res.className = "riyaz_show";
    } else if (res.className == "riyaz_show") {
        res.className = "replies";
    }
}

//Like btn code
// 1st step__to get the id of like btn 
const like = document.getElementById('like_btn');
const singleClick = () => {
    like.style.fontWeight = 'bold';
    like.style.background = '#bbe1fa';
    like.style.color = '#1b262c';
    like.innerHTML = "✓ Liked";
}
const doubleClick = () => {
        like.style.fontWeight = 'normal';
        like.style.background = '#3282b8';
        like.style.color = '#fff';
        like.innerHTML = "Like";
    }
    //2nd step to call the func on click
var clickCount = 0;
like.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            singleClick();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
}, false);