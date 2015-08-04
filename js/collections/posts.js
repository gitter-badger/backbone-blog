define([
	'backbone',
	'backbonefire',
	'models/post'
], function (Backbone, Backbonefire, Post) {
	var Posts = Backbone.Firebase.Collection.extend({
		model: Post,
		url: 'https://bb-blog.firebaseio.com/posts',
		initialize: function (event) {
			this.listenTo(this, 'all', function (eventName) {
				console.info('collection', eventName)
			});
		},
        comparator: function (post1, post2) {
           var t1 = post1.get('releaseDate'),
               t2 = post2.get('releaseDate');
        
           if (t1 > t2) {
               return -1
           } else if (t1 < t2) {
               return 1
           } else {
               return 0;
           }
        }

	});
	return Posts;
});


