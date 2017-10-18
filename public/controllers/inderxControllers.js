define([
    'persons',
    'indexView'
], function (Persons, IndexView) {
    var indexController = {
        ini: function () {
            var persons = new Persons();
          
            persons.on('reset', function (data) {
                new IndexView({ collection: data });
            })
            persons.fetch({ reset: true })
        }
    }
    return indexController;
});