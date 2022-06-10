export const section2Anim = (windowCenter) => {
    const leftSide = document.querySelector('.section2-leftSide__anim')
    const rightSide = document.querySelector('.section2-rightSide__anim')
    const section2 = document.querySelector('.section-2')

    let leftSideCenter = section2.offsetTop - (section2.offsetHeight / 2) + 400

    if(windowCenter >= leftSideCenter) {
        leftSide.classList.add('section2-leftSideAnim')
        rightSide.classList.add('section2-rightSideAnim')
    } else {
        leftSide.classList.remove('section2-leftSideAnim')
        rightSide.classList.remove('section2-rightSideAnim')
    }
}