define([
    'backbone',
    'handlebars',

    'views/search',
    'views/last-posts',
    'views/photo-stream',
    'views/tags',

    'text!templates/sidebar.html'

], function (Backbone, Handlebars, SearchView, LastPostsView, PhotoStreamView, TagsView, SidebarTpl) {
    var SidebarView;
    SidebarView= Backbone.View.extend({
        template: Handlebars.compile(SidebarTpl),
        renderSearch: function () {
            var searchView = new SearchView();
            this.$('.search-container').html(searchView.render().$el);
        },
        renderLastPosts: function () {
            var lastPostsView = new LastPostsView();
            this.$('.last-posts-container').html(lastPostsView.render().$el);
        },
        renderPhotoStream: function () {
            var photoStreamView = new PhotoStreamView();
            this.$('.photo-stream-container').html(photoStreamView.render().$el);
        },
        renderTags: function () {
            var tagsView = new TagsView();
            this.$('.tags-container').html(tagsView.render().$el);
        },
        render: function() {
            var html = this.template();
            this.$el.append(html);
            this.renderSearch();
            this.renderLastPosts();
            this.renderPhotoStream();
            this.renderTags();
            return this;
        }
    });
    return SidebarView;
});