const fs = require('fs');
const path = require('path');

let r = path.join(__dirname, 'text.txt')
   var stream = new fs.ReadStream(r, 'utf8');
     stream.on('readable', function(){
     var data = stream.read();
     console.log(data);
   
   })
    

   
    
  

