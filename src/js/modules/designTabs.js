const designTabs = () => {
		const	navList = document.querySelector('.nav-list-designs'),
	  repairSlider = document.querySelectorAll('.designs-tab>img'),
		repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item-design'),
		tabsSlider = document.querySelectorAll('.designs-tab');

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
			}
		});
	}
  sliders();
});	
const sliders = () => {
	const sliderContent = document.querySelector('.designs-slider'),
			slider = document.querySelectorAll('.designs-tab:not(.hidden) > .slider'),
			tabsSlider = document.querySelectorAll('.designs-tab'),
			sliderArrow = document.querySelectorAll('.slider-arrow');
  slider.forEach(function(slide) {slide.classList.remove('item-active');});
  slider[0].classList.add('item-active');
	let currentSlide = 0;
	
	const startSlide = () => {
		sliderArrow.forEach((elem) => {
			elem.addEventListener('click', (e) => {
        e.preventDefault();
				let target = e.target;
		
				if(target.classList.contains('slider-design-arrow_right') || target.classList.contains('next')){
					slider[currentSlide].classList.remove('item-active');
					currentSlide++;
					if(currentSlide >= slider.length){
						currentSlide = 0;
					}
					slider[currentSlide].classList.add('item-active');	
				}else if(target.classList.contains('slider-design-arrow_left') || target.classList.contains('prev')){
					if(currentSlide - 1 == -1){
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
export default designTabs;