const { select, insert, update } = require('../models/burger.js'); 



const express = require('express');
const app = express();

// get an instance of the express Router
let router = express.Router();

// register the router so it can be used
app.use('/', router)

router.get('/',(request,response)=>{
    console.log(select());
    response.render('home');
});

router.post('/',(request,response)=>{
    //insertOne(request.name,request.bool);

  response.send(`${request.body.name} said ${request.body.bool}`);
});

router.put('/',(request,response)=>{
    //updateOne(request.name,request.bool,request.id);
  response.send('put');
});

//exporting thee router to other modules
module.exports = router;
