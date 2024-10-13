document.addEventListener('DOMContentLoaded', function(){

const menuBtn = document.querySelector('.icon-menu');
const closeBtn = document.querySelector('.close-menu');
const sideNav = document.querySelector('.side-nav');
const darkOverlay = document.querySelector('.dark-overlay');

menuBtn.addEventListener('click', function(){
    sideNav.style.display = 'flex';
    darkOverlay.style.display = 'block';
   
})

closeBtn.addEventListener('click', function(){
    sideNav.style.display = 'none';
    darkOverlay.style.display = 'none';
})
}) 



