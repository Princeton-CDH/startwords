// use js to enable smooth scroll on issue list page for safari via polyfill
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('a[href="#features"]')
    var features = document.getElementById('features')

    if (button) button.addEventListener('click', jumpDown)

    function jumpDown(event) {
        event.preventDefault();
        features.scrollIntoView({
            behavior: 'smooth'
        })
    }
})