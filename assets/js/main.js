/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL OPTIONS*/
sr.reveal('.digital__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.digital__img',{delay: 400}); 
sr.reveal('.digital__social-icon',{ interval: 200}); 


sr.reveal('.growth__img',{}); 
sr.reveal('.growth__subtitle',{delay: 400}); 
sr.reveal('.growth__text',{delay: 400}); 


sr.reveal('.growth__subtitle',{}); 
sr.reveal('.growth__text',{}); 
sr.reveal('.growth__data',{interval: 200}); 
sr.reveal('.growth__img',{delay: 600});


sr.reveal('.brand__img',{interval: 200}); 

 




