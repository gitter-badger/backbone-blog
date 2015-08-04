define([
	'backbone',
	'handlebars',

    'text!templates/post-detail.html'

], function (Backbone, Handlebars, PostDetailTpl) {
	var SinglePostView;
	SinglePostView= Backbone.View.extend({
		className: 'post-detail',
		template: Handlebars.compile(PostDetailTpl),
		initialize: function () {
			document.body.scrollTop = 0;
		},
		render: function() {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			return this;
		},
		convertTimeHelper: function () {
			Handlebars.registerHelper('convertTime', function(options) {
				var str = options.fn(this),
					date = new Date(str),
					day = date.getDate(),
					month = date.getMonth() + 1,
					year = date.getFullYear();
				if (!str) {
					return '-';
				}
				if (day <= 9) { day = '0' + day; }
				if (month <= 9) { month = '0' + month; }

				return day + '/' + month + '/' + year;
			});
		}
	});
	return SinglePostView;
});
