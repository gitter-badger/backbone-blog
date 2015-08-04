define([
	'backbone'
], function (Backbone) {
	var Router = Backbone.Router.extend({
	  routes: {
	    '': 'mainpage',
	    'posts': 'showPosts',
	    'post/new': 'newPost',
	    'post/view/:id': 'showSinlePost',
	    'post/edit/:id': 'editPost'
	  }
	});
	return Router;
});

