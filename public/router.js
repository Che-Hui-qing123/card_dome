define([
    'backbone', 'indexController','addController','showController','editController'
], function (B, indexController, addController,showController,editController) {
    var Router = B.Router.extend({
        routes: {
            '': 'index',
            'add': 'add',
            'show/:id':'show',
            'edit/:id':'edit'
        }, index: function () {
            indexController.ini();
        }, add: function () {
            addController.init()
        },show:function(id){
            showController.init(id)
        },edit:function(id){
            editController.init(id)
        }

    })
    var router = new Router();
    return router;
});