window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo2",window.scrollY>0);
})
