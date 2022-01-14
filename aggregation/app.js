var express= require ('express')
var app = express()

var Order = require('./models/order.js')
var User = require('./models/user.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
//Database connection 

var uristring = 'mongodb://localhost/task';
 
mongoose.connect(uristring, {  useNewUrlParser: true, useUnifiedTopology: true }, function (err, res) {
    if (err) { 
        console.log('Error when connecting');
    } 
    else {
        console.log('Successfully connected');
    }
});

var mongoose = require('mongoose');
  
app.post('/createOrder',function(req,res){

var order = new Order({
	"orderId":req.body.orderId,
    "userId":req.body.userId,
    "subtotal":req.body.subtotal,
    "date":	req.body.date,
	
})

order.save(function(err,data){
	if(err)
	console.log(err)
	else
	res.send(data)
})
}) 

app.post('/createUser',function(req,res){

	var user = new User({
		"userId":req.body.userId,
		"name":req.body.name,
		})
	
	user.save(function(err,data){
		if(err)
		console.log(err)
		else
		res.send(data)
	})
	}) 



app.get('/getUser',function (req, res) {

	var Id = req.body._Id


	User.findOne().populate('Order').exec(function(err, c) {
    if (err) { return console.log(err); }

    console.log(c);
});

});
	

app.listen(3000,function(){
    console.log('server On')
})