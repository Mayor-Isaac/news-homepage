const showMenu = document.querySelector('.toggle')
const navBar = document.querySelector('nav')
const closeMenu = document.querySelector('.close-menu')
showMenu.addEventListener('click', function(){
    navBar.style.display = 'block'
    navBar.classList.add('show-nav')
    closeMenu.classList.remove('d-none')
    showMenu.style.display ='none'
})
closeMenu.addEventListener('click', function(){
    showMenu.style.display ='block'
    navBar.style.display = 'none'
})