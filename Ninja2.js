
class Ninja{
    constructor( name, health, speed, strength){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.showStats = function(){
            console.log("Name: " + this.name + ", Strength: " + strength +", Speed: " + speed + ", Health: " + this.health);
        }

        this.kick = function(ninja){
            let kick = strength * 15;
            ninja.health = ninja.health - kick;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + kick + " Health!"); 
        }
    }

    sayName(){
        console.log("My name is " + this.name);
    }


    drinkSake(){
        this.health = this.health + 10;
    }

    punch(ninja){
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    }
}

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Koji");

ninja1.punch(ninja2)
ninja2.kick(ninja1);



