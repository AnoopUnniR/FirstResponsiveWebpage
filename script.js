/* const toggleButton = document.getElementsByClassName('sandwitch-btn-cont')[0]
const navbarLink = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLink.classList.toggle('active')
})*/

/*var toggleStatus = 1;
function toggleMenu(){
    if (toggleStatus==1){
        document.getElementsByClassName("nav-links-cont").style.left ("200px");
        toggleStatus = 0;
    }else if( toggleStatus ==0){
        document.getElementsByClassName("nav-links-cont").style =margin "0px";
        toggleStatus = 1;
    }
}
var toggleStatus = 1;
function display(){
    alert("toggle");
    if (toggleStatus==1){
        document.getElementsByClassName("nav-links-cont").style.left = "-230px";
        toggleStatus = 0;
    }else if( toggleStatus ==0){
        document.getElementsByClassName("nav-links").style.left = "0px";
        toggleStatus = 1;
}
}*/

hamburger = document.querySelector(".sandwitch-btn-cont");
hamburger.onclick =function(){
    navBar = document.querySelector(".nav-links-cont")
    navBar.classList.toggle("active");
}
