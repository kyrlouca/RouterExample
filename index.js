/*
* Route client requests
* we call the server which listens for client data AND routes the request
* we are injecting dependencies. Meaning that we provide the rootMap and the function to make the rooting to the Server
* As a result the server is not changed when we change the routeMap or the Router itself
*/

//require('node_modules');
server=require('./server.js');
router=require('./router.js');
handler= require('./handler');

//map the client method request with a function in module handler
 routeMap={
     '/load':handler.load,
     '/start':handler.start,
     '/upload':handler.upload,
     '/showImg':handler.showImg
 }


server.start(router.route,routeMap);
