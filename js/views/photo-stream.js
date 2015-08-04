define([
    'backbone',
    'handlebars',

    'text!templates/photo-stream.html'

], function (Backbone, Handlebars, PhotoStreamTpl) {
    var PhotoStreamView;
    PhotoStreamView= Backbone.View.extend({
        template: Handlebars.compile(PhotoStreamTpl),
        render: function() {
            var html = this.template();
            this.$el.append(html);
            return this;
        }
    });
    return PhotoStreamView;
});