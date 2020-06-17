// pitbar behavior adapted from PPA
// https://github.com/Princeton-CDH/ppa-django/blob/master/srcmedia/js/pitbar.js
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav[aria-label=main]')
    var scroll = 0

    if (nav) document.addEventListener('scroll', checkScroll)

    function checkScroll() {
        var scrolled = Math.abs(document.body.getBoundingClientRect().top)
        if (scrolled - scroll > 25 && scrolled > scroll && scrolled > 90) {
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