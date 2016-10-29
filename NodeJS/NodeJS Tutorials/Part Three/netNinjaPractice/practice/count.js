/**
 * Created by Oxygen on 18/10/2016.
 */
var counter = function (arr) {
    return `there are ${arr.length} elements in this array`;
    // return 'there are ' + arr.length + ' elements in this array';
};

var addNumbers = function (a, b) {
    return `Sum of two numbers is ${a+b}`
}

module.exports ={
    counter: counter,
    add: addNumbers
};