import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// init Swiper:
const swiper = new Swiper('.Project-list', {
    // loop: true,
    // direction: 'horizontal',
    loop:false,
    slidesPerView:4,
    spaceBetween: 20,
    scrollbar: {
        el: ".Project-scrollbar",
        draggable: true,
    },
});