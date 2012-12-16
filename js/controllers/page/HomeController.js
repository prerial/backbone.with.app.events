define([
  'jquery',
  'underscore',
  'backbone',
  'controllers/weather/View1Controller',
  'controllers/sections/View2Controller',
  'controllers/sections/View3Controller',
  'text!views/page/HomeView.html'
], function ($, _, Backbone, View1Controller, View2Controller, View3Controller, HomeView) {

    return function (evtm) {

        var view = Backbone.View.extend({
            el: $("#page"),
            render: function () {
                this.$el.html(HomeView);
                var view1Controller = new View1Controller(evtm);
                view1Controller.init();
                var view2Controller = new View2Controller(evtm);
                view2Controller.init();
                var view3Controller = new View3Controller(evtm);
                view3Controller.init();
            }
        });
        this.init = function () {
            var v = new view();
            v.render();
        };
    };

});
