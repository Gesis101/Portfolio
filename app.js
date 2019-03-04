const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require("xoauth2");
// Set render engine. Defaultly looks in folder named "views", therefore, we redirect with path join.
app.set('views', path.join(__dirname, 'public/views/pages'));
app.set("view engine", "ejs");

//Express routing
app.use(function(req, res, next){
    console.log(`${req.method} request for '${req.url}`); //Logs what information is been requested.
    next();
});
app.use(express.static("./public"));
app.use(express.static("./public/views"));
app.get('/', function(req, res){
    res.render('index');
});
app.get('/index', function(req, res){
    res.render('index');
    res.end();
});

app.get('/contact', function(req, res){
    res.render('contact');
});

//If path does not existed then tell dat boi to go back!
//REMINDER: MAKE Err 400 Page
app.get('*', function(req, res) {
    res.writeHead(404);
    res.end("It's a sticky one still, just press back and call it a day fam");
  });
//Allows us to retrieve data from the body/html
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/Contact/send', function (req, res) {
    var smtpTransport = require('nodemailer-smtp-transport');
    var data = req.body; //Data from contact body
    //0Auth2 encryption
    var smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
       auth: {
                type: 'OAuth2',
                user: "stephanious1997@gmail.com",
                clientId: "790959670080-1pqf13g8eaun3jif5rag77qrnju079s2.apps.googleusercontent.com",
                clientSecret: "UJWMcFTe2hTVgyQ0OnDKUyT4",
                refreshToken: "1/Ht2vV-FGD13YYCfr5KztnUkpc2gS-qCJZpKTFiD6oUc",
                accessToken: "ya29.GlvCBnYSWXYDKKztmQ0GHBTspzDNNZmEqa5pRrPLjw_Och1DQc689lm6nbQGk0U2gqmsrjvz2GVYOf4jTpCT0TTeO4VSnXGuzQN-73W7PLvCnc13G_kigJD3KzIh",
                scope: "https://mail.google.com/"
          }
    });
    
    //SMTP post message 
   smtpTransport.sendMail({  //email options
   from: data.email,
   to: "thabo.s.moyo@gmail.com", // receiver
   subject: data.subject, // subject
   html:"Sent from "+data.email+" by "+data.guest+" Message : "+data.message // body (var data which we've declared)
    }, function(error, response){  //callback
         if(error){
           console.log(error);
        }else{
           console.log("Message sent: " + res.message);
           res.send("200, Message sent");
           res.send("Press browser back button to return. Server still under work");
       }
      res.end();
   smtpTransport.close(); 
    }); });

app.listen(3000);
console.log("Running on port 3000")
module.exports = app;