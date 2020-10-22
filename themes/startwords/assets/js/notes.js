/* javascript for contextual notes */

class ContextualNotes {
    // setting for hiding contextual notes on scroll; on by default
    hideOnScroll = true;
    showEndnotesOnClose = false;

    constructor() {

        // store reference to current instance for use in event handlers
        var contextnotes = this;

        // display note if page was loaded with a footnote anchor
        // with brief timeout for font loading & layout
        contextnotes.disableHideOnScroll(2);
        var note = contextnotes.getCurrentNote();
        if (note) {
            note.opacity = 0;   // override default target note styles
            window.setTimeout(function(){
                contextnotes.setupNote();
                note.opacity = 1;
            }, 500);
        }

        // bind event listeners
        window.addEventListener('hashchange', function() {
            contextnotes.setupNote();
        }, false);

        /* on scroll, if a footnote is currently targeted, unselect */
        window.addEventListener('scroll', function() {
            if (location.hash.startsWith('#fn:') && contextnotes.hideOnScroll) {
                // close the note and unbind close link handler
                contextnotes.closeNote(contextnotes.getCurrentNote());
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

        // create observable to set endnotes class on footnotes ol when visible
        this.observer = new IntersectionObserver(this.endnoteIntersectionCallback);
        this.endnotes = document.querySelector('.footnotes');
        if (this.endnotes) {
            this.observer.observe(this.endnotes);
        }
        // TODO: also add summary element with text 'show endnotes' ?
    }

    disableHideOnScroll(seconds) {
        // temporarily disable note hide on scroll
        this.hideOnScroll = false;
        window.setTimeout(function(){ this.hideOnScroll = true;}, seconds*1000);
    }

    getCurrentNote() {
        // find currently selected note, if there is one
        if (location.hash.startsWith('#fn:')) {
            return document.getElementById(location.hash.slice(1));
        }
    }

    setupNote() {
        // display current note (if one is targeted), and bind backref handler
        var note = this.getCurrentNote();
        if (note) {
            // TODO: handle notes at the end of the document,
            // where endnotes are visible

            this.positionContextualNote(note);
            // get back reference link to override behavior
            var backref = note.getElementsByClassName('footnote-backref').item(0);
            backref.addEventListener('click', this.noteCloseLinkHandler);
        }
    }

    closeNote(note) {
        // change the location hash, deselecting the note
        // Set to non-existent id so note is no longer targeted,
        // but document does not scroll
        location.hash = '#-';
        // unbind the close link handler
        var backref = note.getElementsByClassName('footnote-backref').item(0);
        // this.removeEventListener('click', noteCloseLinkHandler);
        backref.removeEventListener('click', this.noteCloseLinkHandler);

        // TODO: handle showing endnotes again for notes
        // at end of document
    }

    noteCloseLinkHandler() {
        // prevent default behavior to avoid jarring scroll to reference
        // Check that the parent note is still selected; otherwise behave normally
        var note = this.parentNode.parentNode;
        if (location.hash == '#' + note.getAttribute('id')) {
            event.preventDefault();
            event.stopPropagation();
        }
        window.contextnotes.closeNote(note);   // ugh, how not to assume this?
    }

    positionContextualNote(note) {
        // position the currently selected contextual note, if one is selected
        // and not on a mobile device

        let mql = window.matchMedia('(min-width: 415px)');
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
        // debugger;
        // if reference is close to the left side, flip the triangle
        // 125px: free space in margin when viewport is at 415px (minimum) =
        // (difference between note width and viewport width + len of small side of note triangle)
        if (refLocation.left < (note.clientWidth - 125)) {
            // no further left than zero (don't allow placing off screen)
            noteLeft = Math.max(0, refLocation.left + refLocation.width / 2 - 70);
            note.classList.add('flip');
        }  else {
            // no further left than window width - note width (keep on screen),
            // but not negative
            noteLeft = Math.max(0, Math.min(refLocation.left + refLocation.width / 2 - note.clientWidth + 70,
                                window.innerWidth - note.clientWidth));
            // always ensure flip class is not present, in case of resize
            note.classList.remove('flip');
        }

        note.style.left = noteLeft + 'px'
        note.style.bottom = 'auto';

        // scroll if necessary to make sure positioned note is fully visible
        var noteLocation = note.getBoundingClientRect();
        if (noteLocation.bottom > document.documentElement.clientHeight) {
            // disable hiding the note when the window scrolls
            this.disableHideOnScroll(1);

            // adjust by amount that is not showing plus some extra
            var adjustment = noteLocation.bottom - document.documentElement.clientHeight + 10;
            window.scrollBy(0, adjustment);
            // move the note by the same amount
            note.style.top = noteLocation.top - adjustment + 'px';
        }
    }

    endnoteIntersectionCallback(entries, observer) {
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
}

document.addEventListener('DOMContentLoaded', function() {
    // initialize contextual notes and make available on window
    console.log('init context notes')
    window.contextnotes = new ContextualNotes();
});















