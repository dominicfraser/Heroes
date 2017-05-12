var assert = require('assert')
var Task = require('../task.js')

describe('Task', function () {

  beforeEach(function(){
    this.task1 = new Task("Hard","High",100);
  });

  it("should have a difficulty", function(){
    assert.equal("Hard", this.task1.difficulty);
  });

  it("should have a urgency", function(){
    assert.equal("High", this.task1.urgency);
  });

  it("should have a reward", function(){
    assert.equal(100, this.task1.reward);
  });

  it("should have a default completed of false", function(){
    assert.equal(false, this.task1.completed);
  });

  it("should be able to change completed", function(){
    this.task1.markCompleted();
    assert.equal(true, this.task1.completed);
  });

});