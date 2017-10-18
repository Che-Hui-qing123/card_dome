var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


var Person = require('./db').Person;
app.post('/person', function (req, res) {
  console.log(req.body)
  var person = new Person(req.body)
  person.save().then(function () {

  })
})

app.get('/person', function (req, res) {
  Person.find().then(function (persons) {
    console.log(persons)
    res.json({
      code: 1,
      msg: "获取数据成功",
      data: persons.map(function (item) {
        var k = item.toObject();
        k.id = item.id.toString();
        delete k._id;
        return k
      })
    })
  })
})

app.get('/person/:id', function (req, res) {
  Person.findById(req.params.id).then(function (data) {
    console.log(data)
    res.json({
      person: persons.map(function (item) {
        var k = item.toObject();
        k.id = item.id.toString();
        delete k._id;
        return k
      })
    })
  })
})

app.delete('/person/:id', function (req, res) {
  Person.findByIdAndRemove(req.params.id).then(function () {

  })
})

app.put('/person/:id',function(req,res){
  console.log(req.params.id)
  Person.findByIdAndUpdate(req.params.id,req.body).then(function(){

  })
})

app.listen(3000, function () {
  console.log('服务器运行在3000')
})
