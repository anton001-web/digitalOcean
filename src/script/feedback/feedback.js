import 'bootstrap/scss/bootstrap.scss';
import '../../styles/form/feedback_index.css';
import '../path/header-paths'

const headerMenu = document.querySelector('.header-list')
const menuOverlay = document.querySelector('.header-menu__overlay')
const menuOpen = document.querySelector('.humb')
const headerBack = document.querySelector('.header-back')

menuOpen.addEventListener('click', () => {
    headerMenu.classList.add('menu-opened')
    menuOverlay.classList.add('menu-overlay__visible')
})

document.addEventListener('click', e => {
    if (e.target.classList.contains('header-close-chevron__left') || e.target.classList.contains('header-menu__overlay' || 'header-close__block') || e.target.classList.contains('header-close__block')) {
        headerMenu.classList.remove('menu-opened')
        menuOverlay.classList.remove('menu-overlay__visible')
    }
})

const form = document.querySelector('#form')
const sendMail = document.querySelector('#sendMail')

sendMail.addEventListener('click', (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('.form-control')

    inputs.forEach(input => {
        if(input.value.length === 0) {
            input.classList.add('danger')
            input.placeholder = `You should enter ${input.dataset.name}`
        } else if (input.value.length > 0) {
            input.classList.remove('danger')
        }
    })
})


headerBack.addEventListener('click', e => location.href='./index.html')
