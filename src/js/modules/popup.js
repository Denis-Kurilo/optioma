const popup = () => {

	//menu
	const popupMobileMenu = () => {
		const popupMenu = document.querySelector('.popup-dialog-menu'),
			menuIcon = document.querySelector('.menuIcon'),
			body = document.querySelector('.body'),
			menuIconMobile = document.querySelector('.menuIcon--mobile');

		menuIcon.addEventListener('click', () => {
			popupMenu.style.visibility = "visible";
			popupMenu.style.transform = "translate3d(0,0,0)";
			body.style.overflow = 'hidden';
		});

		menuIconMobile.addEventListener('click', () => {
			popupMenu.style.visibility = "visible";
			popupMenu.style.transform = "translate3d(0,0,0)";
			body.style.overflow = 'hidden';
		});

		popupMenu.addEventListener('click', (event) => {
			let target = event.target;
			if(target.matches('.close-menu') || target.matches('li a')){
				popupMenu.style.visibility = "hidden";
				popupMenu.style.transform = "translate3d(645px,0,0)";
				body.style.overflow = 'visible';
			}
		});

	window.addEventListener('click', (e) => {
        let target = e.target;
        if (!target.closest('.menuIcon')) {
         	popupMenu.style.visibility = "hidden";
					popupMenu.style.transform = "translate3d(645px,0,0)";
					body.style.overflow = 'visible';
        };
    });

	}



	popupMobileMenu();
	//menu-end

	//fixed burger menu
		const topMenu = document.querySelector('.header__top-menu--mobile'),
			 offsetTop = topMenu.offsetTop;
		window.addEventListener('scroll', () => {
			if (window.pageYOffset >= 200) {
	    	topMenu.style.display = 'block';
	    	topMenu.style.position = 'fixed';
		  } else {
	    	topMenu.style.display = 'none';
		  }
		});

		//popup-consultation
			const popupConsultation = () => {
				const btnConsultation = document.querySelector('.btnConsultation'),
					 popupConsult = document.querySelector('.feedback-popup'),
					 mobileBtn = document.querySelector('.mobile-btn');

				btnConsultation.addEventListener('click', () => {
					popupConsult.style.visibility = 'visible';
				});

				mobileBtn.addEventListener('click', () => {
					popupConsult.style.visibility = 'visible';
				});
			}
			popupConsultation();
		//popup-consultation-end

		const close = () => {
			const form = document.querySelectorAll('form');


			form.forEach((elem) => {
				elem.addEventListener('click', (e) => {
					let target = e.target;
					if(target.matches('.close')){
						elem.style.visibility = 'hidden';
					}
				});
			})
		};
		close();
}
export default popup;