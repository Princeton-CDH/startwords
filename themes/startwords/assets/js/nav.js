// pitbar behavior adapted from PPA
// https://github.com/Princeton-CDH/ppa-django/blob/master/srcmedia/js/pitbar.js
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav.main')
    var scroll = 0

    // hide the nav element when scrolling down; show when scrolling up quickly
    function checkScroll() {
        var scrolled = Math.abs(document.body.getBoundingClientRect().top)
        if (scrolled > scroll && scrolled > 40) {
            if (!nav.classList.contains('hidden')) {
                nav.classList.add('hidden')
            }
        }
        else if (scrolled < scroll && scroll - scrolled > 5) {
            if (nav.classList.contains('hidden')) {
                nav.classList.remove('hidden')
            }
        }
        scroll = scrolled
    }

    // only use the hide/show behavior if the screen matches mobile media query
    function setHandler() {
        var mobile = window.matchMedia('(max-width: 768px)')
        if (mobile.matches) document.addEventListener('scroll', checkScroll)
        else document.removeEventListener('scroll', checkScroll)
    }

    // apply the behavior on page load and re-apply if window is resized
    setHandler()
    window.addEventListener('resize', setHandler)
})