var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/text', function(req, res, next) {
  res.send('this is the index router');
});

router.get('/hello/:name', function(req, res, next) {
  var name = req.params.name;
  res.send(`<div>Hello <b>${name}</b></div>`);
});

router.post('/save', function(req, res) {

  var data = req.body;

  var sql = `insert into table(name, date) values('${data.name}', '${data.date}')`;

  // execute sql here

  data.all = data.user + ':' + data.password;

  // todo save the data in the database

  res.send(data);

});



module.exports = router;
