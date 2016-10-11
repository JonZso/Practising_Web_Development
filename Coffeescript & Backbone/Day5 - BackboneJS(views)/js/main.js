var Person = Backbone.Model.extend({

	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'Unemployed'

	}
});


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
	}	
	
});

var person = new Person;
var personView = new PersonView({model: person});

var person1 = new Person({name: 'Jon', age: 13});
var personView1 = new PersonView({model: person1});