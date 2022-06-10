import 'bootstrap/scss/bootstrap.scss'
import '../styles/index.css';

const headerMenu = document.querySelector('.header-list')
const menuOverlay = document.querySelector('.header-menu__overlay')
const menuOpen = document.querySelector('.humb')
const toFeedbackMenu = document.querySelector('.toFeedbackMenu')

menuOpen.addEventListener('click', () => {
    headerMenu.classList.add('menu-opened')
    menuOverlay.classList.add('menu-overlay__visible')
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('header-close-chevron__left') || e.target.classList.contains('header-menu__overlay' || 'header-close__block') || e.target.classList.contains('header-close__block')) {
        headerMenu.classList.remove('menu-opened')
        menuOverlay.classList.remove('menu-overlay__visible')
    }
})

toFeedbackMenu.addEventListener('click', (e) => {
    e.preventDefault()
    location.href = './about.html'
})