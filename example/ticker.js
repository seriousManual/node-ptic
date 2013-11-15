var util = require('util');

var PTic = require('../');

function runViaInterval(i, duration, callback) {
    var o = outputter();
    var handle = setInterval(o, i);

    setTimeout(function() {
        console.log(util.format('finished interval with %d calls', o.stats.c));

        clearInterval(handle);
        callback();
    }, duration);
}

function runViaPTic(i, duration, callback) {
    var ticker = new PTic(i, true);

    var o = outputter();
    ticker.on('tick', o);

    setTimeout(function() {
        console.log(util.format('finished ptic usage with %d calls', o.stats.c));

        ticker.stop();
        callback();
    }, duration);
}

function outputter() {
    var f = function() {
        f.stats.c++;
        var t = new Date();
        console.log(util.format('%ds %dms', t.getSeconds(), t.getMilliseconds()));
    };

    f.stats = {
        c: 0
    };

    return f;
}

var i = 200;
var d = 2000;

console.log('this example shows that the regular approach via setInterval is broken');
console.log('the interval drifts and events get lost\n');

runViaPTic(i, d, function() {
    console.log('###############################################');

    runViaInterval(i, d, function() {
        console.log('done!');
    });
});