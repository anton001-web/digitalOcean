import img1 from '../../assets/images/image1.jpg'
import img2 from '../../assets/images/image2.jpg'
import img3 from '../../assets/images/image3.jpg'
import img4 from '../../assets/images/image4.jpg'

const sliderLine = document.querySelector('.slider .slider-line');

const slides = [
    {name: 'Anton', job: 'Fullstack Senior Developer', opinion: 'Digital ocean is the best company', img: img1},
    {name: 'Elena', job: 'Backend Middle Developer', opinion: 'Digital ocean is the best company', img: img2},
    {name: 'Artem', job: 'Fullstack Junior Developer', opinion: 'Digital ocean is the best company', img: img3},
    {name: 'Artyr', job: 'Frontend Trainee Developer', opinion: 'Digital ocean is the best company', img: img4}
]

const toHTML = (slide) => `
    <div class='slide'>
        <div class="slide-icon">
            <img src=${slide.img} class='slide-image' alt="">
        </div>
        <div class="slide-info">
            <p class="slide-opinion">${slide.opinion}</p>
            <span class="slide-name"> - ${slide.name}</span>
            <br>
            <span class="slide-job">${slide.job}</span>
        </div>
    </div>
`

function render() {
    const html = slides.map(slide => toHTML(slide)).join('')

    sliderLine.innerHTML = html

}
render()



