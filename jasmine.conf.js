// These lines make "require" available
// see https://www.kindacode.com/article/node-js-how-to-use-import-and-require-in-the-same-file/
import { createRequire } from 'module';
global.require = createRequire(import.meta.url);

const SpecReporter = require('jasmine-spec-reporter').SpecReporter

//jasmine.getEnv().clearReporters() // remove default reporter logs
jasmine.getEnv().addReporter(
  new SpecReporter({
    // add jasmine-spec-reporter
    spec: {
      displayPending: true,
    },
  })
)

//module.exports = {
const config = {
  // Spec directory path relative to the current working dir when jasmine is executed.
  "spec_dir": "unit-tests",

  // Array of filepaths (and globs) relative to spec_dir to include and exclude
  "spec_files": [
    "**/*[sS]pec.?(m)js",
    "!**/*nospec.js"
  ],

  // Array of filepaths (and globs) relative to spec_dir to include before jasmine specs
  "helpers": [
    "helpers/**/*.?(m)js"
  ],
  
  // Configuration of the Jasmine environment
  // "env" is optional, as are all of its properties.
  "env": {
    // Whether to fail a spec that ran no expectations
    "failSpecWithNoExpectations": false,
    
    // Stop execution of a spec after the first expectation failure in it
    "stopSpecOnExpectationFailure": false,

    // Stop execution of the suite after the first spec failure  
    "stopOnSpecFailure": false,

    // Run specs in semi-random order
    "random": false
  }
}

export default config;
