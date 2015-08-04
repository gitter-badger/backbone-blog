define([
    'backbone',
    'handlebars',

    'text!templates/post.html'

], function (Backbone, Handlebars, PostTpl) {
    var PostView;
    PostView = Backbone.View.extend({
        className: 'post wow fadeIn',
        template: Handlebars.compile(PostTpl),
        events: {
            'click .js-delete-post': 'deletePost'
        },
        initialize: function () {
            this.listenTo(this.model, 'remove', this.remove);
        },
        render: function () {
            this.convertTimeHelper();
            this.formatKeywordsHelper();
            var html = this.template(this.model.toJSON());
            this.$el.append(html);
            return this;
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
        formatKeywordsHelper: function () {
            Handlebars.registerHelper('formatKeywords', function (options) {
                var reqExp = /[^\w-]+/,
                    array = (options.fn(this)).split(reqExp),
                    context = {
                        keywords: []
                    };
                for (var i = 0; i < array.length; i += 1) {
                    if (array[i] !== '') {
                        context.keywords[i] = '<a href="#">' + array[i] + '</a>';
                    }
                }
                return context.keywords.join(' ');
            });
        },
        deletePost: function (event) {
            event.preventDefault();
            this.model.destroy();
        }

    });
    return PostView;
});