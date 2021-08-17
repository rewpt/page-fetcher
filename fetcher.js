const request = require('request');
const fs = require('fs');

const commandArgs = process.argv.slice(2);
const website = commandArgs[0];
const fileLoc = commandArgs[1];

request(website, (error, response, body) => {
  if(!(error)){
    fs.writeFile(fileLoc, body, function(err){
      if(err) {
        return console.log('Write error: ', err);
      }
      const fileSize = fs.statSync(fileLoc).size;
      console.log(`Downloaded and saved ${fileSize} bytes to ${fileLoc} `);
    } )
  }
  if(error){ console.log('Request Error: ',error);};
});