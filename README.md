# Precise TICker

[![Build Status](https://travis-ci.org/zaphod1984/node-ptic.png)](https://travis-ci.org/zaphod1984/node-ptic)

[![NPM](https://nodei.co/npm/ptic.png)](https://nodei.co/npm/ptic/)

[![NPM](https://nodei.co/npm-dl/ptic.png?months=3)](https://nodei.co/npm/ptic/)

ptic is a more precise interval emitter. It resyncs itselfs to the desired timeframe. Bind to the `tick` event to get notified depending on the interval.

## Installation

````
npm install ptic
````

## Run Tests

````
npm tests
````

## Usage

### Constructor([interval, [autoStart]])

creates a ticker object that emits a `tick` event according to the specified interval.
parameters:

* `interval`: the time in milliseconds between two ticks, default: 1000ms.    
* `autoStart`: optional flag that specifies if the ticker should start on instantiation, default: false

### start([startImmediately])
causes the ticker to start emitting `tick` events

* `startImmediately`: specifies if the ticker should start immedately. if set to false the ticker first ticks on the next step in the interval raster.

### stop()
stops the ticker

## Behaviour
````
T: emitted tick

interval: 10ms, startImmediately=true

0         10        20        30        40
|---------|---------|---------|---------|
   ^
   start(true)
   T      T         T         T         T


interval: 10ms, startImmediately=false

0         10        20        30        40
|---------|---------|---------|---------|
   ^
   start(false)
          T         T         T         T
````

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
