import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper bundle with all modules installed
import {EffectFade, Navigation, Pagination, Autoplay} from 'swiper/modules';
import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
    },
});