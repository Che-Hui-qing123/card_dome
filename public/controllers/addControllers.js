define([
    'person',
    'addView'
], function(Person, addView) {
    var addController = {
        init:function(){
            var person=new Person();
          
            // 把创建的控模型传入view
            new addView({model:person})
        }
    }  
    return addController;  
});