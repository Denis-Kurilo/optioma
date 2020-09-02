const repair = () => {
	const	navList = document.querySelector('.nav-list'),
	  repairSlider = document.querySelectorAll('.tabs-slider>img'),
		repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item'),
		tabsSlider = document.querySelectorAll('.tabs-slider');

	const toggleTabContent = (index) => {
		for(let i = 0; i < tabsSlider.length; i++){
			if(index === i){
				repairTypesNavItem[i].classList.add('active');
				tabsSlider[i].classList.remove('hidden');
			}else{
				repairTypesNavItem[i].classList.remove('active');
				tabsSlider[i].classList.add('hidden');
			}
		}
	};

navList.addEventListener('click', (e) => {
	let target = e.target;
	if(target.classList.contains('repair-types-nav__item')){
		repairTypesNavItem.forEach((item, i) => {
			if(item === target){
				toggleTabContent(i);
				console.dir(tabsSlider[i].children)
			}
		});
	}
});	
 
	const sliders = () => {
		const sliderContent = document.querySelector('.repair-types-slider-wrap'),
				slider = document.querySelectorAll('.slider'),
				slider2 = document.querySelectorAll('.types-repair2 .slider'),
				// tabsSlider = document.querySelectorAll('.tabs-slider'),
				sliderArrow = document.querySelectorAll('.slider-arrow');
		let currentSlide = 0;

		const toggleContent = (index) => {
			for(let i = 0; i < tabsSlider.length; i++){
				if(index === i){
					
				}
			}
		};

		const startSlide = () => {
			sliderArrow.forEach((elem) => {
				elem.addEventListener('click', (e) => {
					let target = e.target;
					if(target.classList.contains('slider-arrow_right') || target.classList.contains('next')){
						slider[currentSlide].classList.remove('item-active');
						currentSlide++;
						if(currentSlide >= slider.length){
							currentSlide = 0;
						}
						slider[currentSlide].classList.add('item-active');	
					}else if(target.classList.contains('slider-arrow_left') || target.classList.contains('prev')){
						if(currentSlide - 1 == -1){
							currentSlide = slider2.length -1;
						}else{
							slider[currentSlide].classList.remove('item-active');
							currentSlide--;
							slider[currentSlide].classList.add('item-active');
						}
					}
				});
			});
		}
		startSlide();
	};
	sliders();
};

export default repair;