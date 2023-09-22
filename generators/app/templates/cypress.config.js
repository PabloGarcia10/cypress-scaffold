const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // To change your environment variable, run the following code: npx cypress open --env version="RequiredEnvironment"
  // Or you can change directely through this file

  env: {
    USER: "",
    PASS: ""
  },
  e2e: {
    setupNodeEvents(on, config) {
      const version = config.env.VERSION || 'stage'
      const envs = {
        stage: "google",
        preprod: ""
      }

      config.baseUrl = `https://www.${envs[version]}.com`
      return config
    },
  },
});
