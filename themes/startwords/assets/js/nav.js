// pitbar behavior adapted from PPA
// https://github.com/Princeton-CDH/ppa-django/blob/master/srcmedia/js/pitbar.js
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav[aria-label=main]')
    var mobile = window.matchMedia('(max-width: 768px)')
    var scroll = 0

    if (nav && mobile.matches) document.addEventListener('scroll', checkScroll)

    function checkScroll() {
        var scrolled = Math.abs(document.body.getBoundingClientRect().top)
        if (scrolled > scroll) {
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
})