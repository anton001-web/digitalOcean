export const headerAnim = (windowCenter) => {
    const header = document.querySelector('.header')
    const hero = document.querySelector('.section-1')
    let scrollTop = window.scrollY
    let heroCenter = hero.offsetHeight / 2


    if(scrollTop >= heroCenter) {
        header.classList.add('fixed')
        hero.style.marginTop = `${header.offsetHeight}px`
    } else {
        header.classList.remove('fixed')
        hero.style.marginTop = '0px'
    }
}