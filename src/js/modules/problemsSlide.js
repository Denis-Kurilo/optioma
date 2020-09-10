const problemsSlide = () => {
const sliders = () => {
	const sliderContent = document.querySelector('.problems-wrap'),
			slider = document.querySelectorAll('.mobile-hiden'),
			sliderArrow = document.querySelectorAll('.slider-arrow');
	let currentSlide = 0;
	
	const startSlide = () => {
		sliderArrow.forEach((elem) => {
			elem.addEventListener('click', (e) => {
        e.preventDefault();
				let target = e.target;
		
				if(target.classList.contains('problems__slider-arrowR') || target.classList.contains('next')){
					slider[currentSlide].classList.remove('mobile-active');
					currentSlide++;
					if(currentSlide >= slider.length){
						currentSlide = 0;
					}
					slider[currentSlide].classList.add('mobile-active');	
				}else if(target.classList.contains('problems__slider-arrowL') || target.classList.contains('prev')){
					if(currentSlide - 1 == -1){
					}else{
						slider[currentSlide].classList.remove('mobile-active');
						currentSlide--;
						slider[currentSlide].classList.add('mobile-active');
					}
				}
			});
		});
	}
	startSlide();
	};
sliders();
};

export default problemsSlide;