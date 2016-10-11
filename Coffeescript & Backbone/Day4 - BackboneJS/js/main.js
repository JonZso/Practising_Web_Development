// var Person = function(config){
//  this.name = config.name;
//  this.age = config.age;
//  this.occupation = config.occupation;
// };


// Person.prototype.work = function() {
// 	return this.name + ' is working.';
// };

var Person = Backbone.Model.extend({

	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'Unemployed'

	},
     //To use validate you would: "created_person.set('name' , 'Jon', {validate: true})" this would return true.. if name is empty would return false.
validate: function() {

    if(!name) return 'name empty';
    if(!age) return 'age empty';
   },
	// validate: function(attrs){
	// 	if (attrs.age < 0){
	// 		return 'everyone has a age';
	// 	}

	// 	if (!attrs.name){
	// 		return 'everyone has a name';
	// 	}
	// },



	work: function(){
		return this.get('name') + ' is working.'
	}
});