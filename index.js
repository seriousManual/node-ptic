var Emitter = require('events').EventEmitter;
var util = require('util');

/**
 * EventEmitter that emits 'tick' events at a specific interval
 * More precise as setInterval, resyncs itself
 * @param interval the repeat interval in ms, default: 1000
 * @param autoStart start the ticker automatically
 * @constructor
 */
function Ticker(interval, autoStart) {
    Emitter.call(this);

    autoStart = autoStart || false;

    this._interval = interval || 1000;
    this._handle = null;

    if(autoStart) {
        this.start();
    }
}

util.inherits(Ticker, Emitter);

/**
 * the tick function, internal
 * @private
 */
Ticker.prototype._tick = function(tick) {
    var duration = this._interval - ((new Date()).getMilliseconds() % this._interval);

    this._handle = setTimeout(this._tick.bind(this, true), duration);

    if(tick) {
        this.emit('tick');
    }
};

/**
 * indicates if the ticker process is currently emitting tick events
 * @returns {boolean}
 * @private
 */
Ticker.prototype.isRunning = function() {
    return this._handle !== null;
};

/**
 * starts the ticker
 * @param startImmediately
 */
Ticker.prototype.start = function(startImmediately) {
    startImmediately = startImmediately !== undefined ? !!startImmediately : true;

    if(!this.isRunning()) {
        this._tick(startImmediately);
    }
};

/**
 * stop the ticker
 */
Ticker.prototype.stop = function() {
    if(this.isRunning()) {
        clearTimeout(this._handle);
        this._handle = null;
    }
};

module.exports = Ticker;