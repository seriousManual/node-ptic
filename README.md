# Precise TICker

[![Build Status](https://travis-ci.org/zaphod1984/node-ptic.png)](https://travis-ci.org/zaphod1984/node-ptic)

[![NPM](https://nodei.co/npm/ptic.png)](https://nodei.co/npm/ptic/)

[![NPM](https://nodei.co/npm-dl/ptic.png?months=3)](https://nodei.co/npm/ptic/)

PTic is a more precise interval emitter. It resyncs itselfs to the desired timeframe. Bind to the `tick` event to get notified depending on the interval.

Check the ticker example in the example section for a comparism of setInterval and PTic.

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

### ptic.start([startImmediately])
causes the ticker to start emitting `tick` events

* `startImmediately`: specifies if the ticker should start immedately. if set to false the ticker first ticks on the next step in the interval raster.

### ptic.stop()
stops the ticker

### ptic.isRunning()
indicates if the ticker is currently emitting tick events.

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

setTimeout(function() {
    ticker.stop();
}, 4000);

//output:
//tick
//tick
//tick
//tick
//tick

````
