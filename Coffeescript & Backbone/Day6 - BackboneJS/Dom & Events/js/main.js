(function(){

window.App = {
Models: {},
Collections: {},
Views: {}
};


window.template = function(id){
return _.template( $('#' + id).html() ); 
};


//Adding a task
App.Models.Task = Backbone.Model.extend({
	// validate: function(attrs){
	// 	if ( ! attrs.title ){
	// 		return 'a task is required';
	// 	}
	// }
});


//Collections
App.Collections.Task = Backbone.Collection.extend({
	model: App.Models.Task
});

App.Views.Tasks = Backbone.View.extend({
	tagName: 'ul',

	initialize: function() {
		this.collection.on('add', this.addOne, this);
	},

	render: function(){
		this.collection.each(this.addOne, this);

		return this;
	},

	addOne: function(task) {
		//Creating a new child view
		var taskView = new App.Views.Task({ model: task});

		//append to root element
		this.$el.append(taskView.render().el);
	}

		
	
})

//View
App.Views.Task = Backbone.View.extend({
	tagName: 'li',


	//template
	template: template('taskTemplate'),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy',this.remove, this)
	},

	//Listener
	events: {
		'click .edit': 'editTask',  //If you want to just click on text to edit{ remove .edit }
		'click .delete': 'destroy'
	
	},

	editTask:function(){
		var newTaskTitle = prompt('What would you to change the task to?', this.model.get('title'));

		if ( !$.trim(newTaskTitle) ) return;
		this.model.set('title', newTaskTitle);
	},

	destroy:function(){
		this.model.destroy();
	},

	remove: function(){
		this.$el.remove();

	},

	render: function(){
		var template = this.template( this.model.toJSON() );
		// console.log(this.template(this.model.toJSON()));
		this.$el.html(template);
		return this;
	}
});

App.Views.AddTask = Backbone.View.extend({
	el: '#addTask',

	events: {
		'submit': 'submit'
	},

	initialize: function() {
		// console.log(this.el.innerHTML);
	},

	submit: function(e){
		e.preventDefault();
		
		var newTaskTitle = $(e.currentTarget).find('input[type=text]').val();
		
		var task = new App.Models.Task({ title: newTaskTitle });
		this.collection.add(task);
	}
});


window.tasksCollection = new App.Collections.Task([
	{
		title: 'Go to the store',
		priority: 4
	},
	{
		title: 'Eat some nice KFC',
		priority: 3
	},
	{
		title: 'Spend all your money',
		priority: 5
	}
]);

var addTaskView = new App.Views.AddTask({collection : tasksCollection });

var tasksView = new App.Views.Tasks({ collection: tasksCollection });
// tasksView.render();
// console.log(tasksView.el);
$('.tasks').html(tasksView.render().el);


})();

