/* javascript for notes behavior */

window.onload = function() {
	// position contextual note if the page is loaded with one selected
	// FIXME: not displaying on load - is this due to scrolling ?
	positionContextualNote();
};

window.addEventListener('hashchange', function() {
	positionContextualNote();
}, false);

/* on scroll, if a footnote is currently targeted, unselect */
window.addEventListener('scroll', function(e) {
	if (location.hash.startsWith('#fn:')) {
		location.hash = '';
	}
});

function positionContextualNote() {
	// position the currently selected contextual note, if one is selected
	// and not on a mobile device

	 let mql = window.matchMedia('(min-width: 500px)');  // arbitrary number for now
	 // don't position on mobile
	 if (! mql.matches) {
		 	return;
	 }
	 // find current note, if there is one
	 if (location.hash.startsWith('#fn:')) {
	  	var noteId = location.hash.slice(1);
		} else {
  		return;
   	}

		var note = document.getElementById(noteId);
		// note contains a back reference
		var backref = note.getElementsByClassName('footnote-backref').item(0);
		// find reference based on back reference id
		var ref = document.getElementById(backref.getAttribute('href').slice(1));
		var refLocation = ref.getBoundingClientRect();

		// position note relative to the reference marker
		// - top of note should be directly below the ref
		note.style.top = refLocation.top + refLocation.height + 5 + 'px';
		//- tip of the arrow should point to the reference
		var noteLeft;
		// if reference is close to the left side, flip the triangle
		if (refLocation.left < (note.clientWidth - 70)) {
			noteLeft = refLocation.left + refLocation.width / 2 - 70;
			note.classList.add('flip');
		}  else {
			noteLeft = refLocation.left + refLocation.width / 2 - note.clientWidth + 70;
		}

		note.style.left = noteLeft + 'px'
		note.style.bottom = 'auto';
}
