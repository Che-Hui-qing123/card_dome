require.config({
    paths: {
        jquery: './libs/jquery.min',
        underscore: './libs/underscore',
        backbone: './libs/backbone',
        text: './libs/text',
        template: './libs/template-web',
        person: './models/person',
        persons: './models/persons',
        indexHtml: './tpl/index.html',
        addHtml:'./tpl/add.html',
        showHtml:'./tpl/show.html',
        indexView: './views/index',
        addView:'./views/add',
        showView:'./views/show',
        indexController: './controllers/inderxControllers',
        addController:'./controllers/addControllers',
        showController:'./controllers/showControllers',
        editController:'./controllers/editController',
        router:"./router"
}
    , shim: {
        jquery: {
            exports: "$"
        }, underscore: {
            exports: "_"
        }, backbone: {
            deps: ['jquery', 'underscore'],
            exports: "B"
        }
    }

})
require(['backbone','router'],function(B,router){
    B.history.start();
})