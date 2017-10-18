define([
    'backbone',
], function (B) {
    var Person = B.Model.extend({
        urlRoot: '/person',
        defaults: {
            name: '',
            tel: '',
            emil: '',
            qq: '',
            adress: '',
            position: '',
            introduce: ''
        },
        parse: function (res) {            
            return res.data
        }, validate: function (attrs, options) {
            console.log(attrs)
            if (attrs.name.length <= 0) {
                return {
                    attr: "name",
                    msg: "姓名不能为空"
                }
            }
            if (attrs.tel.length <= 0 && isNaN(attrs.tel)) {
                console.log('手机证券')
                return {
                    attr: "tel",
                    msg: "手机号不能为空"
                }
            }
            if (attrs.emil.length <= 0) {
                return {
                    attr: "emil",
                    msg: "emil不能为空"
                }
            }
            if (attrs.qq.length <= 0) {
                return {
                    attr: "qq",
                    msg: "qq号不能为空"
                }
            }
            if (attrs.adress.length <= 0) {
                return {
                    attr: "adress",
                    msg: "地址号不能为空"
                }
            }
            if (attrs.introduce.length <= 0) {
                return {
                    attr: "introduce",
                    msg: "介绍号不能为空"
                }
            }
        }
    })
    return Person;
});