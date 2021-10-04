import img1 from '../assets/img/gallery/galery1.jpg';
import img2 from '../assets/img/gallery/galery2.jpg';
import img3 from '../assets/img/gallery/galery3.jpg';
import img4 from '../assets/img/gallery/galery4.jpg';
import img5 from '../assets/img/gallery/galery5.jpg';
import img6 from '../assets/img/gallery/galery6.jpg';
import img7 from '../assets/img/gallery/galery7.jpg';
import img8 from '../assets/img/gallery/galery8.jpg';
import img9 from '../assets/img/gallery/galery9.jpg';
import img10 from '../assets/img/gallery/galery10.jpg';
import img11 from '../assets/img/gallery/galery11.jpg';
import img12 from '../assets/img/gallery/galery12.jpg';
import img13 from '../assets/img/gallery/galery13.jpg';
import img14 from '../assets/img/gallery/galery14.jpg';
import img15 from '../assets/img/gallery/galery15.jpg';

const gallery = document.getElementById('gallery-content');

const allImage = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]

function random() {

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    shuffle(allImage)

    gallery.innerHTML = allImage.map(el => `<img class="gallery-content-item" src="${el}" alt="img">`)
}

random()



