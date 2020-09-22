module.exports = {
  ci: {
    collect: {
      staticDistDir: "./public",
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
        // homepage/issue detail incorrectly error on contrast of background
        // text with role=presentation
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