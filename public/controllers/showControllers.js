define([
    'persons',
    'showView'
], function (Person, showView) {
    var showController = {
        init: function (id) {
            var person = new Person({ id: id });
            // 把创建的控模型传入view\
            person.on('change', function (data) {
                console.log('ggggggggggg')
                new showView({ collection: data });
            })
            person.fetch()
        }
    }
    return showController;
});