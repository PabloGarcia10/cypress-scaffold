'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-cypress-scaffold:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ api: true, web: true });
  });

  it('creates files', () => {
    assert.file([
      './cypress/e2e/api',
      'cypress/e2e/web',
      'cypress/fixtures',
      'cypress/support/api/requests',
      'cypress/support/web/pageElements',
      'cypress/support/web/pageObjects'

    ]);
  });
});
