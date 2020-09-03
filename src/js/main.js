'use strict';

//plagin
import GLightbox from 'glightbox';
import Swiper, {Navigation} from 'swiper';

import map from './modules/map';
import asd from './modules/func';
import popup from './modules/popup';
import scrollDown from './modules/scrollDown';
import maskPhone from './modules/maskPhone';
import validationForm from './modules/validationForm';
import repair from './modules/repairTabs';
// import sendForm from './modules/sendForm';


// import Swiper JS





map();
asd();
scrollDown();
popup();
maskPhone();
validationForm();
repair();
// sendForm();



//plugins
const lightbox = GLightbox ({
	 	touchNavigation: true,
    loop: true
}) ; 


Swiper.use([Navigation]);
const swiper = new Swiper('.portfolio__slider-inner', {
	// direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 5,
  navigation: {
    nextEl: '.slider-arrow_right',
    prevEl: '.slider-arrow_left',
  },
});



