define([
    'backbone', 'template', 'text!indexHtml', 'jquery','person'
], function (B, template, html, $,Person) {
    var IndexView = B.View.extend({
        el: $('body'),
        template: template.compile(html),
        initialize: function () {
            this.render();
        }, render: function () {
            console.log(this.collection.models)
            var arr = this.collection.models.map(function (item) {
                return item.toJSON();
            })
            // 渲染页面
            this.$el.html(this.template({models:arr}));
        },events:{
            'click #delecteBtn':'deleteModelHand'
        },deleteModelHand:function(event){
              if (confirm('确认要删除吗?')) {
             var id = $(event.target).attr('data-id')
            var model=this.collection.get(id)
            if(!!model){
                var that=this;
              
                model.destroy().done(function(){
                    that.collection.remove(id);
                      
                    that.render();
                })
                location.reload();
            }
        }}
    })
    return IndexView
});