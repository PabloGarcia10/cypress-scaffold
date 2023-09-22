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
      on("task", {
        async connectDB(query) {
          const client = new Client({
            database: "",
            user: "",
            password: "",
            host: "",
            port: 1234,
            ssl: true
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows
        }
      })
      const version = config.env.VERSION || 'stage'
      const envs = {
        stage: "google",
        preprod: ""
      }

      config.baseUrl = `https://${envs[version]}.com`
      return config
    },
  },
});
