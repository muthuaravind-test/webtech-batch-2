var http = require('http')
const fs = require('fs');
var server = http.createServer(function(req,res){
    if (req.url === '/'){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream('Exp10.html').pipe(res);
    }
    else if (req.url === '/server' && req.method ==='POST'){
        var rawData = '';
        req.on('data',function(input){
            rawData += input;
        })
        req.on('end',function(){
            var inputdata = new URLSearchParams(rawData);
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("<table border='1'>")
            res.write("<tr>"+"<td>"+'Name :'+"</td>"+"<td>" +inputdata.get('name')+"<br>"+"</td>"+"</tr>")
            res.write("<tr>"+"<td>"+'Password :'+"</td>"+"<td>"+inputdata.get('pass')+"<br>"+"</td>"+"</tr>")
            res.write("<tr>"+"<td>"+'Age:'+"</td><"+"td>"  +inputdata.get('age') + "<br>"+"</td>"+"</tr>");
            res.write("<tr>"+"<td>"+'Mobile Number :'+"</td>"+"<td>" +inputdata.get('mobile') + '<br>'+"</td>"+"</tr>");
            res.write("<tr>"+"<td>"+'Email :'+"</td>"+"<td>"+inputdata.get('email') + '<br>'+"</td>"+"</tr>");
            res.write("<tr>"+"<td>"+'Gender :'+"</td>"+"<td>" +inputdata.get('gender') + '<br>'+"</td>"+"</tr>");
            res.write("<tr>"+"<td>"+'State:'+"</td>"+"<td>" +inputdata.get('state') + '<br>'+"</td>"+"</tr>");
            res.write("<tr>"+"<td>"+'Skills :'+ "</td>"+"<td>" +inputdata.get('skills') + '<br>'+"</td>"+"</tr>");
            res.write("</table>")
        })
    }
})
server.listen(5050,function(){
    console.log('server is running');
});