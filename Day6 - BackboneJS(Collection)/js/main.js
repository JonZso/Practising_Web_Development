//Model
var Person = Backbone.Model.extend({

	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'Unemployed'

	}
});

//List of People
var PeopleCollection = Backbone.Collection.extend({
model: Person

});


//new view (collection for all)
var PeopleView = Backbone.View.extend({
	tagName: 'ul',


	initialize: function(){
		console.log(this.collection);
	},


	render: function(){
		this.collection.each(function(person){
		// for each, create a new PersonView
		var personView = new PersonView({model: person});
		personView.render();
		this.$el.append(personView.render().el);
		},this);
	
	return this;
}
});



//View
var PersonView = Backbone.View.extend({
	tagName: 'li',


	template: _.template( $('#personTemplate').html() ), //This is rendering using underscorejs returns function
	
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


var peopleCollection = new PeopleCollection([
{
	name: 'Jon Smith',
	age: 34
},
{
	name: 'Kaylan walker',
	age: 11,
	occupation: 'Web Designer'
},
{
	name: 'miss lols',
	age: 12,
	occupation: 'Fashioner'

}


	]);

// console.log (peopleCollection);
var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);

