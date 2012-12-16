define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/page/View2.html'
], function ($, _, Backbone, View) {

    return function (evtm) {
        var view = Backbone.View.extend({
            el: $(".view2"),
            render: function () {
                $(".view2").html(View);
            }
        });
        this.init = function () {
            var v = new view();
            v.render();
            evtm.trigger('view2', { type: 'view2' });
        };
    };
  
});
