var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* POST Calculator query. */
router.post('/evaluate', function(req, res, next) {

    console.log("*******");
    console.log(req.body);
    console.log(req.body.data);

    try {
        var result=eval(req.body.data);
        console.log(result);
        res.status(201).send({message: result})

    }
    catch(e)
    {
        console.log(e);
        res.status(401).send({message: 'Illegal expression'});
    }


});
module.exports = router;
