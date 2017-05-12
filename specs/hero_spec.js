var assert = require('assert')
var Hero = require('../hero.js')

describe('Hero', function () {

  beforeEach(function(){
    this.hero1 = new Hero("Jake", 110, "Apple");
    this.hero2 = new Hero("Sam", 100, "Orange", "Task1");
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

  it("should have favourite food", function(){
    assert.equal("Task1", this.hero2.tasks);
  });

});