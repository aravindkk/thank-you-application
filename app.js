var express=require('express');
var app=express();
var http=require('http');
var server=http.createServer(app);
var application_root=__dirname,
    path=require('path');

app.configure( function() {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(application_root));
  app.use(express.errorHandler({dumpExceptions:true, showStack:true}));
});

app.get('/', function(req,res)
{
 res.sendfile('index.html');
});

var port=process.env.PORT || 5000;
server.listen(port);
console.log("Listening on " + port);

