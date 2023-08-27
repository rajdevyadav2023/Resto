const openBtn = document.getElementById("openNav");
const closeBtn = document.getElementById("closeNav");
const navbar = document.getElementById("sm-navbar-content");

openBtn.addEventListener("click", function(){
    navbar.style.display = "block";
});

closeBtn.addEventListener("click", function(){
    navbar.style.display = "none"
})