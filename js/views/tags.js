define([
    'backbone',
    'handlebars',

    'text!templates/tags.html'

], function (Backbone, Handlebars, TagsTpl) {
    var TagsView;
    TagsView= Backbone.View.extend({
        template: Handlebars.compile(TagsTpl),
        render: function() {
            var html = this.template();
            this.$el.append(html);
            return this;
        }
    });
    return TagsView;
});