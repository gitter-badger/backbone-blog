define([
	'backbone',
	'handlebars',
	'jqueryui',

	'text!templates/new-post.html'

], function (Backbone, Handlebars, jQueryUI, NewPostTpl) {
	var ActionFormView;
	ActionFormView = Backbone.View.extend({
		template: Handlebars.compile(NewPostTpl),
		initialize: function () {
			document.body.scrollTop = 0;
		},
		events: {
			'submit .action-form': 'formSubmit'
		},
		bind: function () {
			$('#inputRelease').datepicker({dateFormat: 'dd/mm/yy'});
		},
		render: function () {
			this.convertTimeHelper();
			this.isNewHelper();

			var html = this.template(this.model.toJSON());
			this.$el.append(html);
			return this;
		},
		isNewHelper: function () {
			var self = this;
			Handlebars.registerHelper('isNew', function (options) {
				var isNew = self.model.isNew();

				if (isNew) {
					return options.fn();
				} else {
					return options.inverse();
				}
			});
		},
		convertTimeHelper: function () {
			Handlebars.registerHelper('convertTime', function (options) {
				var str = options.fn(this),
					date = new Date(str),
					day = date.getDate(),
					month = date.getMonth() + 1,
					year = date.getFullYear();
				if (!str) {
					return '-';
				}
				if (day <= 9) {
					day = '0' + day;
				}
				if (month <= 9) {
					month = '0' + month;
				}

				return day + '/' + month + '/' + year;
			});
		},
		formatDate: function (str) {
			var array = str.split("/"),
				timestamp = new Date(array[2], array[1] - 1, array[0]);
			console.log(timestamp.getTime());
			return timestamp;
		},
		formSubmit: function (event) {
			event.preventDefault();

			this.trigger('form:submitted', {
				title: this.$('.post-title-input').val(),
				author: this.$('.post-author-input').val(),
				releaseDate: this.$('.post-releaseDate-input').val(),
				shortDescr: this.$('.post-shortDescr-input').val(),
				fullDescr: this.$('.post-fullDescr-input').val(),
				keywords: this.$('.post-keywords-input').val(),
				image: this.$('.post-image-input').val()
			});
		}
	});
	return ActionFormView;
});


