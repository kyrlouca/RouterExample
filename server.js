/**
 * Created by KyrLouca on 17/1/2016.
 * it will start the server which has also the responsibility to listen to chuncks of data coming.
 * and when all data have been received request.on('end'  then route the request using the router provided as an argument
 */
http = require('http');

function start(route,rMap) {

    function onRequest(request, response) {
        var data='';
        request.setEncoding('utf8');
        request.on('data',function(chunk){
            data += chunk;
        })
        request.on('end',function(){
              route(request,response,rMap,data);
        })


        //response.writeHead(200, {"Content-Type": "text/html"});
        //response.write('responding from  ');
        //response.end();
    }
   // console.log('before creating1');
    http.createServer(onRequest).listen(8888);
    console.log('sever started1');

}

module.exports ={
    start:start
};
