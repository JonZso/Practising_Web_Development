/**
 * Created by Oxygen on 18/10/2016.
 */
var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;

}

util.inherits(Person, events.EventEmitter);

var jon = new Person('Jon');
var jessie = new Person('Jessie');
var isaac = new Person('Isaac');
var people = [jon, jessie, isaac];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(`${person.name} said: ${mssg}`);
    });
});

jon.emit('speak', 'Hello World');
jessie.emit('speak','I like dominos');