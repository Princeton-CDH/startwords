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
        "/404.html"
    ]
    },
    assert: {
      assertMatrix: [
        /* the homepage and issue detail pages detect a contrast error for some
        background text which is presentational, so we disable contrast checks
        for those pages only as a workaround. */
        {
          "matchingUrlPattern": "http://[^/]+/$",
          assertions: { "color-contrast": "off", }
        },
        {
          "matchingUrlPattern": "http://[^/]+/issues/\d+/$",
          assertions: { "color-contrast": "off", }
        },
        {
          // global settings for all pages
          "matchingUrlPattern": ".*",            
          assertions: {
              // warn if overall performance score is lower than 85
              "categories:performance": ["warn", { minScore: 0.85 }],
              // error if overall accessibility score is lower than 100
              "categories:accessibility": ["error", { minScore: 1 }],
          }
        },
      ]
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};