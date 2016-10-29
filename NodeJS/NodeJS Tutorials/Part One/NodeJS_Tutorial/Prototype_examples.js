/**
 * Created by Oxygen on 12/10/2016.
 */

function User(name) {
    this.name = name;
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life +=1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }

}

var Jon = new User("Jon");
var Jessie = new User("Jessie");

Jon.giveLife(Jessie);

User.prototype.kick = function kick(targetPlayer) {
    targetPlayer.life -= 7;
    console.log(this.name +" Just kicked " +targetPlayer.name);
}

Jon.kick(Jessie);
console.log(Jessie.life);
