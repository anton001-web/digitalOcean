import { base } from './base'
import './plugins/modal'

const infoModal = base.modal({
    title: 'Modal',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'secondary', handler() {
                infoModal.close()
            }}
    ]
})

document.addEventListener('click', (e) => {
    e.preventDefault()
    const btnType = e.target.dataset.open

    if(btnType === 'modal-open') {
        const innerText = e.target.innerText
        infoModal.setContent(`
            Info about - ${innerText}
        `)
        infoModal.open()
    }
})
