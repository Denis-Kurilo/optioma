const designTabs = () => {
	const	navList = document.querySelector('.nav-list-designs'),
		repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item'),
	  // repairSlider = document.querySelectorAll('.tabs-slider>img'),
		tabsSlider = document.querySelectorAll('.designs-tab');

		console.log(navList)


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
	});











/*	const toggleTabContent = (index) => {
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
});	*/

}




export default designTabs;