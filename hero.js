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
  },
  addTask: function(task){
    this.tasks.push(task);
  },
  sortTaskByDiff: function(){
    this.tasks.sort(function(a, b){
      switch (a.difficulty) {
        case "HIGH":
            if (!b.difficulty === "HIGH") {
                return -1;
            }
        case "MEDIUM":
            if (!b.difficulty === "MEDIUM") {
                return (b.difficulty ==="HIGH" ? 1 : -1);
            }
        case "LOW":
            if (b.difficulty === "LOW") {
                return 1;
            }
      }
      return 0;
    })
  },
  sortTaskByUrg: function(){
    this.tasks.sort(function(a, b){
      return a.urgency - b.urgency;
    })
  },
  sortTaskByRe: function(){
    this.tasks.sort(function(a, b){
      return a.reward - b.reward;
    })
  },
  getCompletedTasks: function(){
    var completedTasks = this.tasks.map(function(task){
      return task.completed ? task : null;
    })
    for (var i = completedTasks.length-1; i>=0; i--){
      if (completedTasks[i] === null){
        completedTasks.splice(i, 1);
      }
    }
    return completedTasks;
  }
}

module.exports = Hero;

