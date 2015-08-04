define([
	'backbone'
], function (Backbone) {
	var Post = Backbone.Model.extend({
		initialize: function () {
			this.listenTo(this, 'all', function (eventName) {
				console.info('model', eventName)
			});
		},
		//toJSON: function () {
		//	var obj = Backbone.Model.prototype.toJSON.apply(this);
		//	obj.cid = this.cid;
		//	return obj;
		//},
		defaults: {
			title: null,
			author: null,
			releaseDate: null,
			shortDescr: null,
			fullDescr: null,
			keywords: null,
			image: 'img/no-image-available.jpg'
		}
	});
	return Post;
});
