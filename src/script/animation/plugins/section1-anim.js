export const section1Anim = (windowCenter) => {
    const leftSide = document.querySelector('.section1-leftSide__anim')
    const rightSide = document.querySelector('.section1-rightSide__anim')

    let leftSideCenter = leftSide.offsetTop - (leftSide.offsetHeight / 2)

    if(windowCenter >= leftSideCenter) {
        leftSide.classList.add('leftSideAnim')
        rightSide.classList.add('rightSideAnim')
    } else {
        leftSide.classList.remove('leftSideAnim')
        rightSide.classList.remove('rightSideAnim')
    }
}