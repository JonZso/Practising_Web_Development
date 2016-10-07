WebsiteModel = Backbone.Model.extend({
	defaults: {
		name : "Jon",
		feeling : "Unsure!"
	},
	initialize: function(){ //Everytime an object ios createed..
		this.bindEvents();
	},
	bindEvents: function(){
		this.on("change:name", function(Model){
				var my_new_name= Model.get("name");
				alert("Hey! The username has been changed to: " + my_new_name+ "!");
		})
	}
});


$(document).ready(function() {
	// var page_1 = new WebsiteModel({name: "Jon!", feeling: "Happy"});
	// page_1.set({feeling: "Spooked"})
	// alert("Hello " + page_1.get("name") + " are you feeling "+ page_1.get("feeling") + "?");

var my_username = new WebsiteModel();
my_username.set({name: "Joe"});
my_username.set({name: "Jessie"});

});