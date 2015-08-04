define([
    'backbone',
    'models/post',
    'collections/posts',
    'routers/router',
    'views/actionForm',
    'views/posts',
    'views/sinlepost',
    'views/sidebar',
    'totop',
    'smoothScroll',
    'bootstrap'

], function (Backbone, Post, Posts, Router, ActionFormView, PostsView, SinglePostView, SidebarView, totop, smoothScroll, bootstrap) {
    var Blog;
    Blog = function () {
        var posts = new Posts(),
            router = new Router();

        router.on('route:mainpage', function () {
            router.navigate('posts', {
                trigger: true,
                replace: true
            });
        });

        router.on('route:showPosts', function () {
            var postsView = new PostsView({
                collection: posts
            });
            $('.blog-container').html(postsView.render().$el);

            var sidebarView = new SidebarView();
            $('.sidebar-container').html(sidebarView.render().$el);

        });

        router.on('route:newPost', function () {
            var newActionForm = new ActionFormView({
                model: new Post()
            });

            newActionForm.on('form:submitted', function (attrs) {
                attrs.id = posts.isEmpty() ? 1 : (_.max(posts.pluck('id')) + 1);
                posts.create(attrs, {wait: true});
                router.navigate('posts', true);
            });

            $('.blog-container').html(newActionForm.render().$el);
            newActionForm.bind();
        });

        router.on('route:editPost', function (id) {
            var post = posts.get(id),
                editActionForm;
            if (post) {
                editActionForm = new ActionFormView({
                    model: post
                });

                editActionForm.on('form:submitted', function (attrs) {
                    post.save(attrs);
                    router.navigate('posts', true);
                });

                $('.blog-container').html(editActionForm.render().$el);
                editActionForm.bind();
            } else {
                router.navigate('posts', true);
            }
        });

        router.on('route:showSinlePost', function (id) {
            var post = posts.get(id),
                sinlePost;

            if (post) {
                sinlePost = new SinglePostView({
                    model: post
                });

                $('.blog-container').html(sinlePost.render().$el);
            } else {
                router.navigate('posts', true);
            }

        });

        Backbone.history.start();

    };

    return Blog;
});