/**
 * Created by Oxygen on 13/10/2016.
 */
// var fs = require('fs'); //file system  read/write file.
// fs.writeFileSync("corn.txt","Corn is nice with butter. nice.");
// console.log(fs.readFileSync("corn.txt").toString());


var path = require('path');
var websiteHome = "Deaktop/Jon/Mywebsite/index.html"
var websiteAbout ="Deaktop/Jon/Mywebsite/about.html"

console.log(path.normalize(websiteHome));
console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout)); //Website.


//works like set time out but it will loop over and over.

var x=1;
setInterval(function () {
    console.log("Interval rockinon!" + x);
    x+=1;

}, 2000);


console.log(__filename);
console.log(__dirname);
