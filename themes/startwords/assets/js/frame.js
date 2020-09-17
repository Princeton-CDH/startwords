/**
 * This script should be linked using the `defer` attribute in the <head> so
 * that it runs after all resources are finished loading.
 * 
 * It sets the `src` attribute for all iframes to the value of their `data-src`
 * attribute if set, so that they won't load until this script runs.
 * 
 * For more, see:
 * https://www.annacantrell.com/how-to/how-to-defer-loading-iframe-content/
 */
(function() {
    var iframes = document.getElementsByTagName("iframe");
    for (var i=0; i<iframes.length; i++) {
        if (iframes[i].hasAttribute("data-src")) {
            iframes[i].setAttribute("src", iframes[i].getAttribute("data-src"))
        }
    }
})();