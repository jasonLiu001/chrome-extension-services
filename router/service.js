var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();
router.get('/shutdown', function (req, res, next) {
    var cmdStr = 'shutdown -s -t 60';
    exec(cmdStr, function (err, stdout, stderr) {
        console.log(stdout);
        res.json({success: true});
    });

});
module.exports = router;