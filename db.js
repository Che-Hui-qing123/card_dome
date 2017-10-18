const db=require('mongoose');
db.connect('mongodb://localhost/person_info',{
    useMongoClient:true
});
var Schema=db.Schema;
var person_schema=new Schema({
    name:String,
    tel:Number,
    emil:String,
    qq:Number,
    adress:String,
    position:String,
    introduce:String

})
module.exports.Person=db.model('person_info',person_schema)
