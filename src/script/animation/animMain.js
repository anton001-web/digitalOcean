import {section1Anim} from "./plugins/section1-anim";
import {headerAnim} from "./plugins/headerAnim";
import {section2Anim} from "./plugins/section2-anim";
import {section3Anim} from "./plugins/section3-anim";
import {footerAnim} from "./plugins/footerAnim";

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY

        section1Anim(windowCenter)
        headerAnim(windowCenter)
        section2Anim(windowCenter)
        section3Anim(windowCenter)
        footerAnim(windowCenter)
    })
})
