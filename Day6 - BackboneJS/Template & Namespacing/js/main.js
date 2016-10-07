(function(){

window.App = {
Models: {},
Collections: {},
Views: {}
};




window.template = function(id){
return _.template( $('#' + id).html() ); //automatically compiler
// return $('#' + id).html();
};

// App.Models.Person = Backbone.Model.extend({});
// App.Views.PersonView = Backbone.View.extend({});
// App.Collections.PeopleCollection = Backbone.Collection.extend({});



//Model
App.Models.Person = Backbone.Model.extend({

	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'Unemployed'

	}
});

//List of People
App.Collections.PeopleCollection = Backbone.Collection.extend({
model: App.Models.Person

});


//new view (collection for all)
 App.Views.PeopleView = Backbone.View.extend({
	tagName: 'ul',


	initialize: function(){
		console.log(this.collection);
	},


	render: function(){
		this.collection.each(function(person){
		// for each, create a new PersonView
		var personView = new App.Views.PersonView({model: person});
		personView.render();
		this.$el.append(personView.render().el);
		},this);
	
	return this;
}
});



//View
App.Views.PersonView = Backbone.View.extend({
	tagName: 'li',


	template: template('personTemplate'), //This is rendering using underscorejs returns function
	
	initialize: function() {
		this.render();
	},
		
	render: function(){
		//anti-pattern
// this.$el.html(this.model.get('name') + " (" + this.model.get('age') + ") " + "- occupation: " + this.model.get('occupation'));
	this.$el.html( this.template(this.model.toJSON()) ); //calling function
	return this; //always return this 
	}	
	
});

peopleCollection = new App.Collections.PeopleCollection([
{
	name: 'Baby Isaac',
	age: 2
},
{
	name: 'Jon Russell',
	age: 11,
	occupation: 'Web Designer'
},
{
	name: 'Jessie Hutton',
	age: 12,
	occupation: 'Max Caper'

}


	]);

// console.log (peopleCollection);
var peopleView = new App.Views.PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);

})();

console.log(App.Views);