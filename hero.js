var Hero = function(name, health, favFood, tasks){
  this.name = name,
  this.health = health,
  this.favFood = favFood,
  this.tasks = tasks || []
}

Hero.prototype = {
  eat: function(food){
    if (this.favFood === food.name){
      this.health += (food.replenishment * 1.5);
    } else {
      this.health += food.replenishment;
    }
  }
}

module.exports = Hero;

