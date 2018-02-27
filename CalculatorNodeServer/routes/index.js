var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Calulator App'});
});

/* POST Calculator query. */
router.post('/evaluate', function (req, res, next) {
    try {
        var result = eval(req.body.data);
        console.log(result);
        res.status(201).send({message: result})

    }
    catch (e) {
        console.log(e);
        res.status(401).send({message: 'Illegal expression'});
    }
});
module.exports = router;
