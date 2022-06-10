export const footerAnim = (windowCenter) => {
    const footerItemsUp = document.querySelectorAll('.footer-animUp')
    const footer = document.querySelector('.footer-container')
    const footerLeft = footer.querySelector('.footer-left')
    const footerRight = footer.querySelector('.footer-right')

    let footerCenter = footer.offsetTop + (footer.offsetHeight / 2) - 400

    if(windowCenter >= footerCenter) {
        footerLeft.classList.add('itemSideLeft')
        footerRight.classList.add('itemSideRight')
        footerItemsUp.forEach(item => {
            item.classList.add('itemUp-appearance')
        })
    } else {
        footerLeft.classList.remove('itemSideLeft')
        footerRight.classList.remove('itemSideRight')
        footerItemsUp.forEach(item => {
            item.classList.remove('itemUp-appearance')
        })
    }
}