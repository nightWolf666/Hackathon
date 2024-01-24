var navbar = document.querySelector('navbar');

var offsetY = 100;

window.addEventListener('scroll', (e) => {
  console.log(window.scrollY);
  if (window.scrollY > offsetY) {
    navbar.classList.remove('active')
  } else {
    navbar.classList.add('active')
    
  }
  
  offsetY = window.scrollY > 100 ? window.scrollY : 100
  
  
  
  
})