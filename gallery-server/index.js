const http = require('http');
const fs = require('fs');
const path = require('path');



const server = http.createServer((req, res) => {
   // console.log(req);
   //console.log(req.url, req.method)
   
   res.setHeader('Content-type', 'text/html')
 
  // fs.readFile('./views/index.html', (err, data) => {
     //  if(err) {
     //      console.log(err)
     //
    //       res.end()
    //   }
    
   //    res.end(data);
    
 //  })

 let url;
 switch(req.url) {
     case '/':
         url = 'index.html';
         break;
         case '/AboutUs':
             url = 'AboutUs.html';
             break;
             case '/ArtMockup':
                 url = 'ArtMockup.html';
                 break;
                 case '/Studio':
                     url = 'Studio.html';
                     break;
                     case '/ThenAndNow':
                     url = 'ThenAndNow.html';
                     break;
                     case '/OurArtists':
                         url = 'OurArtists.html';
                         break;
             default:
                 url = '404.html';
                 break;
 }

 let filePath = path.join(__dirname, 'views', url);

 fs.readFile(filePath, (err, data) => {
     if(err) {
         console.log(err)
         res.end()
     }
     res.end(data)
 })
   

})


const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
    console.log('Server running at http://localhost:' + PORT)
})