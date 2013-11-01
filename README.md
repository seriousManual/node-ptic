# PTIC

[![Build Status](https://travis-ci.org/zaphod1984/node-ptic.png)](https://travis-ci.org/zaphod1984/node-ptic)

[![NPM](https://nodei.co/npm/ptic.png)](https://nodei.co/npm/ptic/)

[![NPM](https://nodei.co/npm-dl/ptic.png?months=3)](https://nodei.co/npm/ptic/)

## Installation

````
npm install ptic
````

## Run Tests

````
npm test
````

## Usage

````javascript

var PTic = require('ptic');

var ticker = new PTic(1000);

ticker.on('tick', function() {
    console.log('tick');
});

ticker.start();

````