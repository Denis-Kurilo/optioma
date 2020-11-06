const resources = () => {
	const audio = document.getElementById('audioClick'),
		menuIcon = document.querySelector('.menuIcon'),
		menuIconMobile = document.querySelector('.menuIcon--mobile'),
		body = document.querySelector('.body'),
		play = false,
		btnRepair = document.querySelectorAll('.nav-list-repair>button');
	const playAudioClick = () => {
		if(play == false){
				audio.play();
			}
		}
	btnRepair.forEach((elem) => {
		elem.addEventListener('click', () => {
			playAudioClick();
		})
	})
	menuIcon.addEventListener('click', playAudioClick);
	menuIconMobile.addEventListener('click', playAudioClick);
}
export default resources;