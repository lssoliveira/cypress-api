const { defineConfig } = require("cypress")

module.exports = defineConfig({
  env: {
    API_BASE_URL: 'https://jsonplaceholder.typicode.com',
  }
})