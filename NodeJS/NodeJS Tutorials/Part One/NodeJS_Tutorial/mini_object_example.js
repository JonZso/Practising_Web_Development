/**
 * Second Example.
 * My take on little objects..
 */

var DefaultPerson = {
    favFood: null,
    favFilm: "Not Declared"
};

var Person = DefaultPerson
Person.favFilm = "Event Horizon";

Person.opinion_about_film = function () {
    console.log("I Love watching ", this.favFilm)
}
Person.opinion_about_food = function () {
    if (this.favFood == null){
        console.log("I have no idea what my favourite food it..");
    }else{
        console.log("I love to eat", this.favFood)
    }
}


console.log(Person.favFilm);
Person.opinion_about_film();
Person.opinion_about_food();
Person.favFood = "Slippers";
Person.opinion_about_food();
