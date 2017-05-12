var Hero = function(name, health, favFood, tasks){
  this.name = name,
  this.health = health,
  this.favFood = favFood,
  this.tasks = tasks || []
}

Hero.prototype = {

}

module.exports = Hero;

