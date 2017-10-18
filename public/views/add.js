define([
    'backbone',
    'template',
    'text!addHtml',
    'jquery',

], function (B, template, html, $) {
 var AddView = B.View.extend({
        el: $('body'),
        template: template.compile(html),
        initialize: function () {
            this.render()
       
            this.listenTo(this.model, 'invalid', this.validateHandle)
        }, render: function () {
            this.$el.html(this.template(this.model))
            var tempModel = this.model;
            $('input[type=text]').each(function () {
                $(this).val(tempModel.get($(this).attr('name')))
            })
            $('textarea').val(tempModel.changed.introduce)
        }, events: {
            'submit': 'submitHandle'
        }, validateHandle: function (model, error) {
            this.$(`span[class='${error.attr}']`).text(error.msg)
        }, submitHandle: function (e) {
            e.preventDefault();
            var arr = $('form').serializeArray();
            var data = _.reduce(arr, function (preVal, curVal) {
                preVal[curVal.name] = curVal.value;
                return preVal
            }, {})
            this.model.set(data)
            console.log(this.model)
            if (this.model.isValid()) {
                this.model.save();
                window.location.href = 'index.html'
            }


        }

    })
    return AddView;

});