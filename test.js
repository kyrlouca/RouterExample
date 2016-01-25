/**
 * Created by KyrLouca on 19/1/2016.
 */
var http = require('http');
var options = {
    host: 'www.google.com.cy',
    port: 80,
    path: '/'
};
var req = http.get(options, function(response) {
    // handle the response
    var res_data = '';
    response.on('data', function(chunk) {
        res_data += chunk;
    });
    response.on('end', function() {
        console.log(res_data);
    });
});
req.on('error', function(e) {
    console.log("Got error: " + e.message);
});