define([
    'backbone',
    'handlebars',
    'views/post',

    'text!templates/posts.html'

], function (Backbone, Handlebars, PostView, PostsTpl) {
    var PostsView;
    PostsView = Backbone.View.extend({
        template: Handlebars.compile(PostsTpl),
        initialize: function () {
            this.listenTo(this.collection, 'add', this.renderPost);
            this.listenTo(this.collection, 'sync update', this.render);
            this.listenTo(this.collection, 'sync', this.preLoaderEnd);
        },
        events: {
            "click #searchBtn": "search"
        },
        renderPost: function (post) {
            var postView = new PostView({
                model: post
            });
            this.$('.posts-container').append(postView.render().$el);
        },
        render: function () {
            var html = this.template();
            this.$el.html(html);
            this.collection.each(this.renderPost, this);
            return this;
        },
        search: function (event) {
            var query = $("#searchInput").val();
            this.render(this.collection.search(query));
        },
        preLoaderEnd: function () {
            $('.preloader').hide('fast');
        }
    });
    return PostsView;
});
