/**
 * Created by Oxygen on 18/10/2016.
 */
var fs = require('fs');

// var readFile =  fs.readFileSync('./textTest.txt','utf8');  //Reads file. Sync Method {will fully read file before it moves on}

//Async
fs.readFile('textTest.txt', 'utf8',function (err,data){
 //  fs.writeFile('writtenFile.txt',data);
});

// console.log('Deleting File..'); //Async = means this is read first || Sync will read file then do its stuff before getting here..
fs.exists('writtenFile.txt',(exists) => {
   return exists ? (fs.unlink('writtenFile.txt')+console.log('Deleting File..')) : console.log('File not Found!');
});