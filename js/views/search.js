define([
    'backbone',
    'handlebars',

    'text!templates/search.html'

], function (Backbone, Handlebars, SearchTpl) {
    var SearchView;
    SearchView= Backbone.View.extend({
        template: Handlebars.compile(SearchTpl),
        render: function() {
            var html = this.template();
            this.$el.append(html);
            return this;
        }
    });
    return SearchView;
});