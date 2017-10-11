import express from 'express';
import schema from './schema.es6';
import {graphql} from 'graphql';
import bodyparser from 'body-parser';

import mongoose from 'mongoose';

let db = mongoose.connection;

let app = express();
let PORT = 9000;

app.use(bodyparser.text({type: 'application/graphql'}));

app.use('/node_modules', express.static('nodes_modules'));
app.use('/', express.static('index.html'));

app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Connection, Host, Origin, Referer, Access-Control-Request-Method, Access-Control-Request-Headers, User-Agent, Accept, Content-Type, Authorization, Content-Length, X-Requested-With, Accept-Encoding, Accept-Language');
  next();
});

app.post('/', (req, res)=> {
/*  var userM = mongoose.model('user');
  var persoM = mongoose.model('perso');
  persoM.find({},{}, function(err, perso){
    if(err) return handleError(err);
    console.log(perso);
    userM.findOne({_id:"59c8d431f4329f62d0d8f8d0"}, function(error, user){
      if (error) return handleError (err);
      console.log(user.login);
    })
  });*/
  console.log("Communication:");
  console.log(req);
  if(req.params.query){
    graphql(schema, req.params.query).then((result)=>{res.send(result);});
  }else{
    res.send("My bad :(");
  }

})

let server = app.listen(PORT, function () {
  console.log('Example app listening on port '+PORT+' !');

  mongoose.connect('mongodb://localhost/brochet', {useMongoClient: true});

})
