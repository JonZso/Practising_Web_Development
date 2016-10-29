/**
 * Created by Oxygen on 18/10/2016.
 */
var stuff = require('./../practice/count.js')
function callFunction(func) {
    func();

}

var sayHi = function (name) {
 console.log("Hi " + name + "!");
};

sayHi('jon');

callFunction(sayHi);



console.log(stuff.counter(['Jon','Jessie','Isaac']));