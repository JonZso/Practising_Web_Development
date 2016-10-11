(function (argument) {
	
window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}  //1 or 2 should be more than enough.
};

// window.template = function(id){
// 	return ._ template( $('#' + id).html() );
// };

var vent = _.extend({}, Backbone.Events);  //new object with accessibility to all Backbone.

App.Views.Appointment = Backbone.View.extend({
	initialize: function(){
		//listen for v                show v
		vent.on('appointment:show', this.show, this);

	},

	show: function(id){
		console.log('Showing the appointment! with the id of ' + id )

	}
});


App.Router = Backbone.Router.extend({
routes: {
	'': 'index',
	'appointment/:id':'showAppointment' //#uri tag:  : method (Triggers showAppoitnment)

},

index: function(){
	console.log('hello from the index page');
},

showAppointment: function(appointmentId){
	vent.trigger('appointment:show', appointmentId);

}

});

new App.Views.Appointment;

new App.Router;
Backbone.history.start();

})();