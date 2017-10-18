define([
    'backbone',
    'template',
    'text!showHtml',
    'jquery',
    'person'
], function (B, template, html, $, Person) {
    var showView = B.View.extend({
        el: $('body'),
        // 渲染模板
        template: template.compile(html),
        initialize: function () {

            this.render();
        },
        render: function () {
            //  渲染页面  
            console.log(this.collection.attributes)            
            this.$el.html(this.template({ person: this.collection.attributes }));
        }
    })
    return showView;
});