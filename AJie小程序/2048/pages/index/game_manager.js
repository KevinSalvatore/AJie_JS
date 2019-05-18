const Grid = require("./grid.js");

function GameManager(size, startTils = 2) {
  this.size = size;
  this.startTils = startTils;
}

GameManager.prototype = {
  setup: function() {
    this.grid = new Grid(this.size);
    this.addStartTils();
    return this.grid.cells;
  },
  addStartTils: function() {
    for (let i = 0; i < this.startTils; i++) {
      this.addRandomTils();
    }
  },
  addRandomTils: function() {
    const value = Math.random() < 0.8 ? 2 : 4;
    const position = this.grid.randomAvailable();
  }
};

module.exports = GameManager;
