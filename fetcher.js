const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fileName = process.argv[3];


request(url, (error, response, body) => {

  fs.writeFile(fileName, body, null, () => {

    console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
  });
});


