window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo3",window.scrollY>0);
})
