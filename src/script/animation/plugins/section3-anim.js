export const section3Anim = (windowCenter) => {
    const workingList_items = document.querySelectorAll('.working-list__item')
    const title = document.querySelector('.section3-title')
    const workingList = document.querySelector('.working-list')

    let workingListCenter = workingList.offsetTop - (workingList.offsetHeight / 2)

    if(windowCenter >= workingListCenter) {
        title.classList.add('item-appearance')
        workingList_items.forEach(item => {
            item.classList.add('item-appearance')
        })
    } else {
        title.classList.remove('item-appearance')
        workingList_items.forEach(item => {
            item.classList.remove('item-appearance')
        })
    }
}