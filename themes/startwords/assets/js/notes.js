/* javascript for contextual notes */

// hide contextual notes on scroll; on by default
var hideOnScroll = true;

document.addEventListener('DOMContentLoaded', function() {
  disableHideOnScroll(2);
  setupNote(); // display note if page was loaded with a footnote anchor
  // create observable to sed endnotes class on footnotes ol when visible
  var observer = new IntersectionObserver(endnoteIntersectionCallback);
  var endnotes = document.querySelector('.footnotes');
  observer.observe(endnotes);
});

window.addEventListener('hashchange', function() {
	setupNote();
}, false);

/* on scroll, if a footnote is currently targeted, unselect */
 window.addEventListener('scroll', function(e) {
  	if (location.hash.startsWith('#fn:') && hideOnScroll) {
 			location.hash = '';
  	}
});

function endnoteIntersectionCallback(entries, observer) {
	console.log('endnoteIntersectionCallback');
		entries.forEach(entry => {
      var elem = entry.target;
	    if (entry.isIntersecting) {
		      elem.classList.add('endnotes');
		  } else {
		      elem.classList.remove('endnotes');
		  }
		})
	}

function setupNote() {
	// display current note (if one is targeted), and bind backref handler
	var note = getCurrentNote();
	if (note) {
		positionContextualNote(note);
		// get back reference link to override behavior
		var backref = note.getElementsByClassName('footnote-backref').item(0);
		backref.addEventListener('click', noteCloseLinkHandler);
	}
}

function disableHideOnScroll(seconds) {
	// temporarily disable note hide on scroll
	hideOnScroll = false;
	window.setTimeout(function(){ hideOnScroll = true;}, seconds*1000);
}

function getCurrentNote() {
	// find currently selected note, if there is one
	 if (location.hash.startsWith('#fn:')) {
	  	return document.getElementById(location.hash.slice(1));
		}
}


function noteCloseLinkHandler() {
	// prevent default behavior to avoid jarring scroll to reference
	event.preventDefault();
	pushHashAndFixTargetSelector('#');
	this.removeEventListener('click', noteCloseLinkHandler);
}


function positionContextualNote(note) {
	// position the currently selected contextual note, if one is selected
	// and not on a mobile device

	 let mql = window.matchMedia('(min-width: 414px)');
	 // don't position on mobile
	 if (! mql.matches) {
		 	return;
	 }

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

// update location hash so that ::target changes but document does not scroll
// solution via https://stackoverflow.com/a/59013961/9706217
function pushHashAndFixTargetSelector(hash) {
    history.pushState({}, document.title, hash); //called as you would normally
    const onpopstate = window.onpopstate; //store the old event handler to restore it later
    window.onpopstate = function() { //this will be called when we call history.back()
        window.onpopstate = onpopstate; //restore the original handler
        history.forward(); //go forward again to update the CSS
    };
    history.back(); //go back to trigger the above function
}
