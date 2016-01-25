/**
 * Created by KyrLouca on 18/1/2016.
 */
url=require('url');
fs=require('fs');
querystring=require('querystring');
processExec = require('child_process').exec

function load(request,response){
    console.log('loadingq'+request.url);
    processExec('dir','-file |select fullname',function(error,stdout,stderror){
        console.log( stdout);
        console.log( stderror);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<p>responding from loading </p> ');
        response.write('<p>'+' loading'+url.parse(request.url).pathname+ '</p>' );
        response.write(stdout);
        response.end();


    })


}
function start(request,response){
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    console.log('savingq'+request.url);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
 function upload(request,response,data){
     console.log('savingq'+request.url);
     response.writeHead(200, {"Content-Type": "text/html"});
     var disp=querystring.parse(data);
     response.write('you have send data'+disp.text);
     response.end();

 };

function showImg(request,response,data){
    var img;
    response.writeHead(200, {'Content-Type:':'image/png'});
    fs=fs.readFile('./images/zorpas.png',function(err,img){
        if (!err){
            response.write(img,"binary");
            response.end();
        }
        else{
            response.write('error readin file');
            response.end();

        }
    })

}

module.exports.load=load;
module.exports.start=start;
module.exports.upload=upload;
module.exports.showImg=showImg;