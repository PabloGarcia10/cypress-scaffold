# generator-cypress-scaffold

[![NPM version][npm-image]][npm-url]

> Scaffold cypress project

## Installation

First, install [Yeoman](http://yeoman.io) and generator-cypress-scaffold using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-cypress-scaffold
```

Then generate your new project:

```bash
yo cypress-scaffold
```

## Usage

This package provides both API and WEB tests functions that can help you in your validations.

WEB:

* Mapping elements by using Page Elements
* Interaction with elements by Page Objects

API:
* Methods used in this project: GET, POST, PATCH, PUT and DELETE.
* Feel free to add your own methods or change existing ones according to what you need

Configs:
* You can (and should) change the baseUrl in cypress.config.js file. You can also change by CLI by running the following code:

```bash
npx cypress open --env version= "RequiredEnvironment"
```

Remember to change the <"RequiredEnvironment"> by your env. Ex.: 'Stage', 'Preprod', 'QA', etc.

## License

UNLICENSED © [Pablo Alves Garcia]()


[npm-image]: https://badge.fury.io/js/generator-cypress-scaffold.svg
[npm-url]: https://npmjs.org/package/generator-cypress-scaffold
