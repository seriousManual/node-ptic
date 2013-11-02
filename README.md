# Precise TICker

[![Build Status](https://travis-ci.org/zaphod1984/node-ptic.png)](https://travis-ci.org/zaphod1984/node-ptic)

[![NPM](https://nodei.co/npm/ptic.png)](https://nodei.co/npm/ptic/)

[![NPM](https://nodei.co/npm-dl/ptic.png?months=3)](https://nodei.co/npm/ptic/)

ptic is a more precise interval emitter. It resyncs itselfs to the desired timeframe.

## Installation

````
npm install ptic
````

## Run Tests

````
npm test
````

## Usage

### Constructor(interval, [autoStart])

creates a ticker object that emits a `tick` event according to the specified interval.
parameters:

`interval`: the time in milliseconds between two ticks.
`autoStart`: optional flag that specifies if the ticker should start on instantiation, default: false

### start()
causes the ticker to start emitting `tick` events

### stop()
stops the ticker

## Example
````javascript

var PTic = require('ptic');

var ticker = new PTic(1000, true);

ticker.on('tick', function() {
    console.log('tick');
});

ticker.start();

ticker.stop();

````
