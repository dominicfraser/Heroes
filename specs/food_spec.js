var assert = require('assert')
var Food = require('../food.js')

describe('Food', function () {

  beforeEach(function(){
    this.food1 = new Food("Apple", 10);
  });

  it("should have a name", function(){
    assert.equal("Apple", this.food1.name);
  });

  it("should have a replenishment value", function(){
    assert.equal(10, this.food1.replenishment);
  });

});