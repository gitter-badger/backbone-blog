define([
    'backbone',
    'handlebars',

    'text!templates/last-posts.html'

], function (Backbone, Handlebars, LastPostsTpl) {
    var LastPostsView;
    LastPostsView= Backbone.View.extend({
        template: Handlebars.compile(LastPostsTpl),
        render: function() {
            var html = this.template();
            this.$el.append(html);
            return this;
        }
    });
    return LastPostsView;
});