import Swiper from 'swiper';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
// import Swiper and modules styles

Swiper.use([Navigation, Scrollbar]);

import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// init Swiper:
const swiper = new Swiper('.Project-list', {
    // loop: true,
    // direction: 'horizontal',
    loop: false,
    speed: 600,
    watchSlidesProgress: true,
    scrollbar: {
        el: ".Project-scrollbar",
        draggable: true,
    },
    // Default mobile settings
    slidesPerView: 1.2,
    spaceBetween: 24,
    centeredSlides: true,
    grabCursor: true,

    breakpoints: {
        768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            centeredSlides: false
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false
        }
    },
});