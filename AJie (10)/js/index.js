"use strict";

function Player(name) {
  //constructor
  console.log(this);
  this.name = name;
  this.enermy = null;
}
Player.prototype.win = function(){
  console.log(this.name + " win");
};
Player.prototype.lose = function(){
  console.log(this.name + " lose");
};
var player1 = new Player("Kevin");
var player2 = new Player("Jack");

// Player(this);
player1.win();
player2.lose();

player1.enermy = player2;
player2.enermy = player1;