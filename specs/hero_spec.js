var assert = require('assert')
var Hero = require('../hero.js')
var Food = require('../food.js')
var Task = require('../task.js')

describe('Hero', function () {

  beforeEach(function(){
    this.hero1 = new Hero("Jake", 110, "Apple");
    this.hero2 = new Hero("Sam", 100, "Orange", ["Task1"]);
    this.food1 = new Food("Apple", 10);
    this.food2 = new Food("Pear", 8);
    this.task1 = new Task("HIGH",2,100);
    this.task2 = new Task("MEDIUM",3,80);
    this.task3 = new Task("LOW",1,50);
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

  it("should be able to add tasks", function(){
    this.hero1.addTask(this.task1);
    assert.equal(1, this.hero1.tasks.length);
  });

  it("should be able to eat food", function(){
    this.hero1.eat(this.food2);
    assert.equal(118, this.hero1.health);
  });

  it("should gain 1.5x when fav food eaten", function(){
    this.hero1.eat(this.food1);
    assert.equal(125, this.hero1.health);
  });

  it("should sort tasks by difficulty", function(){
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task3);
    this.hero1.sortTaskByDiff();
    assert.equal(this.task3, this.hero1.tasks[0]);
    assert.equal(this.task1, this.hero1.tasks[2]);
  });

  it("should sort tasks by urgency", function(){
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task3);
    this.hero1.sortTaskByUrg();
    assert.equal(this.task3, this.hero1.tasks[0]);
    assert.equal(this.task2, this.hero1.tasks[2]);
  })

  it("should sort tasks by urgency", function(){
    this.hero1.addTask(this.task2);
    this.hero1.addTask(this.task1);
    this.hero1.addTask(this.task3);
    this.hero1.sortTaskByRe();
    assert.equal(this.task3, this.hero1.tasks[0]);
    assert.equal(this.task1, this.hero1.tasks[2]);
  })

});