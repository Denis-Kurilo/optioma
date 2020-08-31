const scrollDown = () => {
	const anchors = document.querySelectorAll('li a[href^= "#"], .arrow-top>a[href*= "#"]');
		for (let anchor of anchors){
			anchor.addEventListener('click', (event) =>{
				event.preventDefault();
				const blockId = anchor.getAttribute('href');

				document.querySelector('' + blockId).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		}

		//arrow appearance
		const headerMain = document.querySelector('.header__top'),
			totop = document.getElementById('totop'),
			offsetHeight = headerMain.offsetHeight;
		window.addEventListener('scroll', () => {
			if (window.pageYOffset >= offsetHeight) {
	    	totop.style.visibility = 'visible';
	    	totop.style.opacity = '1';
		  } else {
	    	totop.style.visibility = 'visible';
	    	totop.style.opacity = '0';
		  }
		});
};
export default scrollDown;


