module.exports = {
    ci: {
      collect: {
        numberOfRuns: 1,
        staticDistDir: "./public",
        url: [
            "/",
            "/about/",
            "/issues/",
            "/issues/1/",
            "/issues/1/data-beyond-vision/"
        ]
      },
      assert: {
        assertions: {
            // warn if overall performance score is lower than 85
            "categories:accessibility": ["warn", { minScore: 0.85 }],
            // error if overall accessibility score is lower than 100
            "categories:accessibility": ["error", { minScore: 1 }],
        }
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };