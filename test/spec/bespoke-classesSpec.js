Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke');
var classes = require('../../lib-instrumented/bespoke-classes.js');

describe("bespoke-classes", function() {

  var deck,

    createDeck = function() {
      var parent = document.createElement('article');
      for (var i = 0; i < 10; i++) {
        parent.appendChild(document.createElement('section'));
      }

      deck = bespoke.from(parent, [
        classes()
      ]);
    };

  beforeEach(createDeck);

  it("should add a 'bespoke' class to the container", function() {
    expect(deck.parent.className).toMatch(/bespoke-parent/);
  });

  it("should add a 'bespoke-slide' class to the slides", function() {
    deck.slides.forEach(function(slide) {
      expect(slide.className).toMatch(/bespoke-slide(\s|$)/);
    });
  });

  describe("bespoke-active", function() {

    it("should add a 'bespoke-active' class to the active slide", function() {
      deck.slide(3);
      expect(deck.slides[3].className).toMatch(/bespoke-active(\s|$)/);
    });

    it("should not add a 'bespoke-active' class to all inactive slides", function() {
      var slides = deck.slides.reverse().slice(0, deck.slides.length - 2).reverse();

      slides.forEach(function(slide) {
        expect(slide.className).not.toMatch(/bespoke-active(\s|$)/);
      });
    });

  });

  describe("bespoke-inactive", function() {

    it("should add a 'bespoke-inactive' class to all inactive slides", function() {
      var slides = deck.slides.reverse().slice(0, deck.slides.length - 2).reverse();

      slides.forEach(function(slide) {
        expect(slide.className).toMatch(/bespoke-inactive(\s|$)/);
      });
    });

    it("should not add a 'bespoke-inactive' class to the active slide", function() {
      expect(deck.slides[0].className).not.toMatch(/bespoke-inactive(\s|$)/);
    });

  });

  describe("bespoke-before", function() {

    it("should add a 'bespoke-before' class to all slides before active slide", function() {
      deck.slide(5);

      var beforeSlides = deck.slides.slice(0, 4);

      beforeSlides.forEach(function(slide) {
        expect(slide.className).toMatch(/bespoke-before(\s|$)/);
      });
    });

    it("should not add a 'bespoke-before' class to all slides after active slide", function() {
      deck.slide(5);

      var notBeforeSlides = deck.slides.slice(5, 9);

      notBeforeSlides.forEach(function(slide) {
        expect(slide.className).not.toMatch(/bespoke-before(\s|$)/);
      });
    });

  });

  describe("bespoke-before", function() {

    it("should add a 'bespoke-after' class to all slides after active slide", function() {
      deck.slide(5);

      var afterSlides = deck.slides.slice(6);

      afterSlides.forEach(function(slide) {
        expect(slide.className).toMatch(/bespoke-after(\s|$)/);
      });
    });

    it("should not add a 'bespoke-after' class to all slides before active slide", function() {
      deck.slide(5);

      var notAfterSlides = deck.slides.slice(0, 5);

      notAfterSlides.forEach(function(slide) {
        expect(slide.className).not.toMatch(/bespoke-after(\s|$)/);
      });
    });

  });

});
