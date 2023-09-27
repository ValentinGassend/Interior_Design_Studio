import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiperProject = new Swiper('.swiper', {
    // loop: true,
    direction: 'horizontal',
    slidesPerView:4,
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});