/**
 * Created by KyrLouca on 17/1/2016.
 */
url=require('url');

function router(request,response, routeMap,data){
    var p;
    var func;
    p=url.parse(request.url).pathname;
    console.log('in router n1:'+p);
    func= routeMap[p];
    if (typeof func=== "function" ){
        func(request,response,data);
    }
}

module.exports={
    route:router

}