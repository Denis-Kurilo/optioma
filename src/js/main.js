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
import designTabs from './modules/designTabs';
import faq from './modules/faq';
// import sendForm from './modules/sendForm';


// import Swiper JS





map();
asd();
scrollDown();
popup();
maskPhone();
validationForm();
repair();
faq();
designTabs();
// sendForm();



//plugins
const lightbox = GLightbox ({
	 	touchNavigation: true,
    loop: true
}) ; 

/*portfolio*/
	Swiper.use([Navigation]);
	const swiperPrtfolio = new Swiper('.portfolio__slider-inner', {
	  loop: true,
	  slidesPerView: 3,
	  spaceBetween: 5,
	  navigation: {
	    prevEl: '.slider-arrow_left',
	    nextEl: '.slider-arrow_right',
	  },
	  breakpoints: {
	    320: {
	      slidesPerView: 1,
	    },
	    480: {
	      slidesPerView: 2,
	    },
	    767: {
	      slidesPerView: 3,
	      // spaceBetween: 5,
	    }
	  }
	});
/*portfolio-end*/

/*parnters*/
	Swiper.use([Navigation]);
	const swiperPartners = new Swiper('.partners-slider', {
	  loop: true,
	  slidesPerView: 3,
	  spaceBetween: 20,
	  navigation: {
	    prevEl: '.slider-partners-arrow_left',
	    nextEl: '.slider-partners-arrow_right',
	  },
	  breakpoints: {
	    320: {
	      slidesPerView: 1,
	    },
	    480: {
	      slidesPerView: 2,
	    },
	    767: {
	      slidesPerView: 3,
	      // spaceBetween: 5,
	    }
	  }
	});
/*parnters-end*/

/*repair*/
	Swiper.use([Navigation]);
	const swiperRepair = new Swiper('.repair-types-slider-wrap', {
	  loop: true,
	  slidesPerView: 1,
	  navigation: {
	    prevEl: '.slider-repair-arrow_left',
	    nextEl: '.slider-repair-arrow_right',
	  },
	  /*breakpoints: {
	    320: {
	      slidesPerView: 1,
	    },
	    480: {
	      slidesPerView: 2,
	    },
	    767: {
	      slidesPerView: 3,
	      // spaceBetween: 5,
	    }
	  }*/
	});
/*repair-end*/



