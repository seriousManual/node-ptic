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

    it('should not tick immediately', function() {
        var ticker = new PTic(100);

        var spy = sinon.spy();
        ticker.on('tick', spy);

        ticker.start(false);

        clock.tick(1000);
        expect(spy.callCount).to.equal(10);
    });

    it('should tick with default interval', function() {
        var ticker = new PTic();

        var spy = sinon.spy();
        ticker.on('tick', spy);

        ticker.start();

        clock.tick(1000);
        expect(spy.callCount).to.equal(2);
    });

    it('should tick automatically', function() {
        var ticker = new PTic(100, true);

        var spy = sinon.spy();
        ticker.on('tick', spy);

        clock.tick(1000);
        expect(spy.callCount).to.equal(10);
    });

    it('should not tick automatically', function() {
        var ticker = new PTic(100);

        var spy = sinon.spy();
        ticker.on('tick', spy);

        clock.tick(1000);
        expect(spy.callCount).to.equal(0);
    });

    it('should stop', function() {
        var ticker = new PTic(100);

        var spy = sinon.spy();
        ticker.on('tick', spy);

        ticker.start();
        clock.tick(1000);
        expect(spy.callCount).to.equal(11);

        ticker.stop();
        clock.tick(1000);
        expect(spy.callCount).to.equal(11);
    });
});