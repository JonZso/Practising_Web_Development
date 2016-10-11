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

App.Router = Backbone.Router.extend({
routes: {
	'': 'index',
	'show/:id':'show', //method trigger
	'download/*filename' : 'download', //splat to catch all..
	'search/:query' : 'search',
	'*other' : 'default'
},

index: function(){
	console.log('hello from the index page');
},
show: function(id){
	console.log('You are being triggered by a show! ID: '+ id);
},

download: function(id){
	console.log('You are being triggered by a show! ID: '+ id);
},

search: function(query){

},
default: function(other){
	alert('Hmm.. I am not sure what you mean');
}

})


new App.Router;
Backbone.history.start();

})();