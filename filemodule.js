var fs = require('fs');

fs.appendFile('myfile.txt', 'Hello i am pratik and using appendfile!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});