(() => {

	console.log('fire');

	function playMatchingAudio(event) {
		let card1 = event.keyCode;
		let card2 = document.querySelector(`audio[data-key=${card1}]`);

		if(card2) {card2.play(); }
	}

	window.addEventListener('keydown', playMatchingAudio);

})();