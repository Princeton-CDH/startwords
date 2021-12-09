/*
 * For details on the Lighthouse CI configuration API, see:
 * https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md
 */

module.exports = {
  ci: {
    collect: {
      staticDistDir: "./public",
      // if new page types are added to the site, they must be added here also
      url: [
        "/",
        "/about/",
        "/issues/",
        "/issues/1/",
        "/issues/1/data-beyond-vision/",
        "/issues/2/",
        "/issues/2/strangers-in-the-landscape/",
        "/issues/2/datas-destinations/",
        "/issues/2/creating-and-recreating-virtual-community/",
        "/issues/2/serendipity-in-the-cairo-geniza/",
        "/404.html"
    ]
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        /* color contrast check reports incorrect results on issue page and
           on 404 page footer due to the way content is actually rendered; so
           we switch it to a warning */
        "color-contrast": "warn",

        /* 3rd-party fonts included by e.g. sketchfab don't use font-display,
           so we have to switch it to a warning */
        "font-display": "warn",

        // switch misc. performance issues to warnings until they are resolved
        "unsized-images": "warn",
        "uses-responsive-images": "warn",
        "offscreen-images": "warn",
        "uses-rel-preconnect": "warn",
        "uses-passive-event-listeners": "warn",
        "uses-optimized-images": "warn",
        "unused-javascript": "warn",
        "unused-css-rules": "warn",
        "total-byte-weight": "warn",
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};