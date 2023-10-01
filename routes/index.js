var express = require('express');
var router = express.Router();
const fs = require('fs');
// const { type } = require('os');//******** 


/* GET home page. */
router.get('/', function(req, res) {
  const files = fs.readdirSync('public/database',{withFileTypes:true});
  res.render('index',{
    files:files,
    fileInsidedata:null,
    filename:null,
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

//file inside data show
router.get('/show/:filename',(req,res)=>{
  const files = fs.readdirSync('public/database',{withFileTypes:true});
  const fileInsidedata = fs.readFileSync(`public/database/${req.params.filename}`,"utf-8")
  console.log(fileInsidedata);
  res.render('index',{
    files:files,
    fileInsidedata:fileInsidedata,
    filename:req.params.filename,
  });
})

//delete route
router.get('/delete/:filename',(req,res)=>{
  fs.unlinkSync(`public/database/${req.params.filename}`);
  res.redirect('/');
})
module.exports = router;
