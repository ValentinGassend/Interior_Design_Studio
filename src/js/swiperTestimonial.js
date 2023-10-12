import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// init Swiper:
const swiper = new Swiper('.Testimonial-container', {
    // loop: true,
    // direction: 'horizontal',
    loop:false,
    slidesPerView:1,
    spaceBetween: 20,
    scrollbar: {
        el: ".Project-scrollbar",
        hide: false,
        draggable: true,
        enabled:true,
        dragSize:20,
        dragClass:".Project-scrollbar-drag"
    },
});