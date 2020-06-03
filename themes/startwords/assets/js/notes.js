/* javascript for notes behavior */

// hide contextual notes on scroll; on by default
var hideOnScroll = true;

document.addEventListener('DOMContentLoaded', function() {
  disableHideOnScroll(2)
	positionContextualNote();
}, false);

window.addEventListener('hashchange', function() {
	positionContextualNote();
}, false);

/* on scroll, if a footnote is currently targeted, unselect */
 window.addEventListener('scroll', function(e) {
  	if (location.hash.startsWith('#fn:') && hideOnScroll) {
  		location.hash = '';
  	}
});

function disableHideOnScroll(seconds) {
	hideOnScroll = false;
	window.setTimeout(function(){ hideOnScroll = true;}, seconds*1000);
}

function positionContextualNote() {
	// position the currently selected contextual note, if one is selected
	// and not on a mobile device

	 let mql = window.matchMedia('(min-width: 414px)');
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
		var noteTop = refLocation.top + refLocation.height + 5 + 'px';

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

		// scroll if necessary to make sure positioned note is fully visible
		var noteLocation = note.getBoundingClientRect();
		if (noteLocation.bottom > window.innerHeight) {
			// disable hiding the note when the window scrolls
			disableHideOnScroll(2)

			// adjust by amount that is not showing plus some extra
			var adjustment = noteLocation.bottom - window.innerHeight + 10;
			window.scrollBy(0, adjustment);
			// move the note by the same amount
			note.style.top = noteLocation.top - adjustment + 'px';
		}
}
