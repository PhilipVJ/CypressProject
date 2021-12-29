// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const browserify = require("@cypress/browserify-preprocessor");
const resolve = require("resolve");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
  };
  on("file:preprocessor", cucumber(options));
};
