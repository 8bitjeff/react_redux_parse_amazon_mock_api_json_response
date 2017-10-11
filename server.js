var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname + '/public/')).listen(3000,function(){
    console.log('App Started at port 3000');
});