var expect = require('chai').expect;
var sinon = require('sinon');

var PTic = require('../');

describe('ptic', function() {
    var clock;

    before(function() {
        clock = sinon.useFakeTimers();
    });

    after(function() {
        clock.restore();
    });

    it('should tick', function() {
        var ticker = new PTic(100);

        var spy = sinon.spy();
        ticker.on('tick', spy);

        ticker.start();
        clock.tick(1000);

        expect(spy.callCount).to.equal(11);
    });

});