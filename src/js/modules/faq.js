const faq = () => {
	const accordion = document.querySelectorAll('.accordion>li');
	accordion.forEach((elem) => {
		elem.addEventListener('click', (e) => {
			let target = e.target;
			if(elem.classList.contains('openFaq')){
				elem.classList.remove('openFaq');
			}else{
				elem.classList.add('openFaq');
			}
		});
		window.addEventListener('click', (e) => {
        let target = e.target;
        if (!target.closest('.accordion>li')) {
            elem.classList.remove('openFaq');
        };
    });
	});
	

}
export default faq;