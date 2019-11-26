const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
var path = require('path');

//Import database schema's
const productData = require('./database/ProductsSchema');
const siteInfo = require('./database/SiteInfoSchema')

//server constants
const PORT = 3000;
var STATIC_ROOT = path.resolve(__dirname, '../client/build');

//Set up express 
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/', express.static(STATIC_ROOT));
//use express router
var router = express.Router();
//set up router to log incoming messages
router.use(function(req,res,next) {
    console.log("/" + req);
    next();
  });

//MongoDB Atlas connection
const dbRoute = 'mongodb+srv://Scott-Greene:Gooner123!@valeathercocluster-div9o.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/getProducts', (req, res) => {
  
  productData.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

app.get('/getSiteInfo', (req, res) => {
  
  siteInfo.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

app.post('/submitSiteInfo',(req, res) => {
  let newSiteInfo = new siteInfo();

  const message = req.body;

  /*
  //validate input types
  if(typeof message.itemName != 'string' ||
    typeof message.price != 'number' ||
    typeof message.description != 'string' ||
    typeof message.imageUrl != 'array'
  )
  {
    return res.json({
      success: false,
      error: 'Invalid Input'
    });
  }
*/
  newSiteInfo.about = message.about;
  newSiteInfo.contactMessage = message.contactMessage;
  newSiteInfo.contactEmail = message.contactEmail;

  newSiteInfo.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });

});

app.post('/submitProduct', (req, res) => {
  let newProduct = new productData();

  const message = req.body;

  /*
  //validate input types
  if(typeof message.itemName != 'string' ||
    typeof message.price != 'number' ||
    typeof message.description != 'string' ||
    typeof message.imageUrl != 'array'
  )
  {
    return res.json({
      success: false,
      error: 'Invalid Input'
    });
  }
*/
  newProduct.itemName = message.itemName;
  newProduct.price = message.price;
  newProduct.description = message.description;
  newProduct.imageUrl = message.imageUrl;

  newProduct.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });

});

//handle 404 for bad request
app.use("*",function(req,res){
    res.status(404).send('404');
  });

app.use("/",router);

app.listen(PORT, function(){console.log('VA Leather Co. server started, listening on PORT '+PORT)});