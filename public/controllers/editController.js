define([
    'persons',
    'addView'
], function (Person, addView) {
    var editController = {
        init: function (id) {
            var person = new Person({ id: id });
            // 把创建的控模型传入view\
            person.on('change', function (data) {
                
                new addView({ model: data });
            })
            person.fetch()
        }
    }
    return editController;
});