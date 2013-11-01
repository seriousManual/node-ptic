var PTic = require('../');

var ticker = new PTic(100, true);

ticker.on('tick', function() {
    console.log((new Date()).getTime());
});

ticker.start();

setTimeout(ticker.stop.bind(ticker), 2000);