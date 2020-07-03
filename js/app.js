(() => {

	console.log('fire');

	let keys = Array.from(document.querySelectorAll('.key'));


	function resetKey() {
		this.classList.remove('playing');
	}

	function playMatchingAudio(event) {

		let card1 = event.keyCode;
		let card2 = document.querySelector(`audio[data-key="${card1}"]`),
		key = document.querySelector(`div[data-key="${card1}"]`);

		if(!card2) {return;}

		if(card2) {

			card2.currentTime = 0;

			card2.play(); 

			key.classList.add('playing');
		}
	}

	window.addEventListener('keydown', playMatchingAudio);

	keys.forEach(key => key.addEventListener('transitionend', resetKey));

})();