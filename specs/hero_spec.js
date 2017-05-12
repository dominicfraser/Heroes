var assert = require('assert')
var Hero = require('../hero.js')
var Food = require('../food.js')

describe('Hero', function () {

  beforeEach(function(){
    this.hero1 = new Hero("Jake", 110, "Apple");
    this.hero2 = new Hero("Sam", 100, "Orange", ["Task1"]);
    this.food1 = new Food("Apple", 10);
    this.food2 = new Food("Pear", 8);
  });

  it("should have a name", function(){
    assert.equal("Jake", this.hero1.name);
  });

  it("should have health", function(){
    assert.equal(110, this.hero1.health);
  });

  it("should have favourite food", function(){
    assert.equal("Apple", this.hero1.favFood);
  });

  it("should have default no tasks", function(){
    assert.equal(0, this.hero1.tasks.length);
  });

  it("should have tasks array", function(){
    assert.equal(1, this.hero2.tasks.length);
  });

  it("should be able to eat food", function(){
    this.hero1.eat(this.food2);
    assert.equal(118, this.hero1.health);
  });

  it("should be able to eat food", function(){
    this.hero1.eat(this.food1);
    assert.equal(125, this.hero1.health);
  });

});