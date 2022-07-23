(module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
}),
  {
    name: "MoodMap",
    version: "0.1.0",
    private: true,
    keywords: ["MoodMap"],
    dependencies: {
      "@analytics/google-analytics": "0.2.2",
      "@stripe/stripe-js": "^1.5.0",
      analytics: "0.3.1",
      "fake-auth": "0.1.7",
      "mailchimp-api-v3": "1.13.1",
      next: "9.5.3",
      "query-string": "6.9.0",
      "raw-body": "^2.4.1",
      "rc-year-calendar": "^1.0.2",
      react: "16.12.0",
      "react-dom": "16.12.0",
      "react-hook-form": "4.10.1",
      "react-query": "2.12.1",
      "react-transition-group": "^4.4.1",
      stripe: "^8.52.0",
    },
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      "stripe-webhook":
        "stripe listen --forward-to localhost:3000/api/stripe-webhook",
    },
    browserslist: {
      production: [">0.2%", "not dead", "not op_mini all"],
      development: [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version",
      ],
    },
    devDependencies: {
      "postcss-flexbugs-fixes": "^4.2.1",
      "postcss-preset-env": "^6.7.0",
      stylelint: "^13.7.1",
      "stylelint-config-standard": "^20.0.0",
      tailwindcss: "^1.8.9",
    },
  };
