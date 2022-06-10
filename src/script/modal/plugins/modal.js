import { base } from '../base.js'

Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}

function createFooter(buttons) {
    if(buttons.length === 0) {
        return document.createElement('div')
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')
    buttons.forEach(button => {
        const $btn = document.createElement('button')
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${button.type || 'secondary'}`)
        $btn.textContent = button.text
        $btn.onclick = button.handler || noop

        wrap.appendChild($btn)
    })

    return wrap
}

function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('amodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay grid" data-close="true">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Window'}</span>
                    ${options.closable ? `<span class='modal-close' data-close="true">&times;</span>` : ''}
                </div>
                <div class="modal-body" data-content>
                    ${options.content || ''}
                </div>
            </div>
        </div>
    `)
    const footer = createFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}

base.modal = function (options) {
    const $modal = _createModal(options)
    const ANIMATION_SPEED = 500
    let closing = false
    let destroyed = false


    const modal = {
        open() {
            if(destroyed) {
                return alert('modal is destroyed')
            }
            $modal.classList.add('open')

        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        }
    }

    const listener  = e => {
        if(e.target.dataset.close === 'true') {
            if(options.closable) {
                modal.close()
            }
        }
    }
    $modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            $modal.removeEventListener('click', listener)
            $modal.parentNode.replaceChild($modal)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}

