var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
  const filedata = fs.readdirSync('public/database',{withFileTypes:true},"utf-8");
  res.render('index',{
    filedata:filedata,
  });
});

// file create feature
router.post('/createfile',(req,res)=>{
  fs.writeFileSync(`public/database/${req.body.filename}`,"");
  res.redirect('/');
})
//folder create feature
router.post('/createfolder',(req,res)=>{
  fs.mkdirSync(`public/database/${req.body.foldername}`);
  res.redirect('/');
})

module.exports = router;
