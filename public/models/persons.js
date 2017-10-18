define([
    'backbone',
    'person'
], function (B,Person) {
    var Persons=B.Collection.extend({
        model:Person,
        url:'/person',
        parse:function(res){
           
             this.set(res.data)
        }
    })
    return Persons;
});