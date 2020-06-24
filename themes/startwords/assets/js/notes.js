/* javascript for contextual notes */

// hide contextual notes on scroll; on by default
var hideOnScroll = true;

document.addEventListener('DOMContentLoaded', function() {
    disableHideOnScroll(2);
    // display note if page was loaded with a footnote anchor
    // with brief timeout for font loading & layout
    var note = getCurrentNote();
    if (note) {
        note.opacity = 0;  // override default target note styles
    }
    window.setTimeout(function(){
        setupNote();
        if (note) {
            note.opacity = 1;
        }
    }, 500);

    // create observable to set endnotes class on footnotes ol when visible
    var observer = new IntersectionObserver(endnoteIntersectionCallback);
    var endnotes = document.querySelector('.footnotes');
    if (endnotes) observer.observe(endnotes);
});

window.addEventListener('hashchange', function() {
    setupNote();
}, false);

/* on scroll, if a footnote is currently targeted, unselect */
window.addEventListener('scroll', function() {
    if (location.hash.startsWith('#fn:') && hideOnScroll) {
        // close the note and unbind close link handler
        closeNote(getCurrentNote());
    }
});


/* Adjust for poor behavior on iOS, where it requires clicking twice
to display the contextual note. */
window.addEventListener('touchend', function(event) {
    // if a footnote reference is touched, disable hide on scroll
    // (in case the touch includes page movement) and trigger a click
    if (event.target.classList.contains('footnote-ref')) {
        disableHideOnScroll(0.5);
        event.preventDefault();
        event.stopPropagation();
        event.target.click();
    }
});

function endnoteIntersectionCallback(entries, observer) {
    entries.forEach(entry => {
      var elem = entry.target;
        if (entry.isIntersecting) {
              elem.classList.add('endnotes');
              // clear computed positions/styles for all notes
              var notes = elem.getElementsByTagName('li');
                    Array.prototype.forEach.call(notes, function(li) {
                li.removeAttribute('style');
                li.classList.remove('flip');
              });
          } else {
              elem.classList.remove('endnotes');
          }
        })
    }

function getCurrentNote() {
    // find currently selected note, if there is one
    if (location.hash.startsWith('#fn:')) {
        return document.getElementById(location.hash.slice(1));
    }
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

function closeNote(note) {
    // change the location hash, deselecting the note
    // Set to non-existent id so note is no longer targeted,
    // but document does not scroll
    location.hash = '#-';
    // unbind the close link handler
    var backref = note.getElementsByClassName('footnote-backref').item(0);
    this.removeEventListener('click', noteCloseLinkHandler);
}

function disableHideOnScroll(seconds) {
    // temporarily disable note hide on scroll
    hideOnScroll = false;
    window.setTimeout(function(){ hideOnScroll = true;}, seconds*1000);
}

function noteCloseLinkHandler() {
    // prevent default behavior to avoid jarring scroll to reference
    // Check that the parent note is still selected; otherwise behave normally
    var note = this.parentNode.parentNode;
    if (location.hash == '#' + note.getAttribute('id')) {
        event.preventDefault();
        event.stopPropagation();
    }
    closeNote(note);
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
        // no further left than zero (don't allow placing off screen)
        noteLeft = Math.max(0, refLocation.left + refLocation.width / 2 - 70);
        note.classList.add('flip');
    }  else {
        // no further left than window width - note width (keep on screen)
        noteLeft = Math.min(refLocation.left + refLocation.width / 2 - note.clientWidth + 70,
                            window.innerWidth - note.clientWidth);
    }

    note.style.left = noteLeft + 'px'
    note.style.bottom = 'auto';

    // scroll if necessary to make sure positioned note is fully visible
    var noteLocation = note.getBoundingClientRect();
    if (noteLocation.bottom > document.documentElement.clientHeight) {
        // disable hiding the note when the window scrolls
        disableHideOnScroll(1);

        // adjust by amount that is not showing plus some extra
        var adjustment = noteLocation.bottom - document.documentElement.clientHeight + 10;
        window.scrollBy(0, adjustment);
        // move the note by the same amount
        note.style.top = noteLocation.top - adjustment + 'px';
    }
}

