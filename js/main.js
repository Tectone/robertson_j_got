 //JavaScript Document
(() => {
 console.log("Linked up");

 // variable stack goes here
 let sigils = document.querySelectorAll('.sigilContainer'),
 	lightbox = document.querySelector('.lightbox'),
 	closeLightBoxButton = lightbox.querySelector('.close-lightbox');

 	// functions in the middle!
 	function showHouseVideo() {
 		//debugger;
 		lightbox.classList.add('show-lightbox');
 		// make the video play
 	}

 	function closeLightbox() {
 		lightbox.classList.remove('show-lightbox');
 		// stop the video and rewind it to 0
 	}

 	//event handling at the bottomNa
 	//
 	sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
 	closeLightBoxButton.addEventListener('click', closeLightbox);
})();