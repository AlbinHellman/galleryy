const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
   // console.log(req);
   //console.log(req.url, req.method)
   
   res.setHeader('Content-type', 'text/html')
 
   
      
   
   fs.readFile('./views/index.html', (err, data) => {
       if(err) {
           console.log(err)


          
           
           res.end()
       
        
       }
       

       
  
    
       res.end(data);

      

      
    
   })

   

   

})







const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
    console.log('Server running at http://localhost:' + PORT)
})