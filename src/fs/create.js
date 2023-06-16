const create = async () => {
    // Write your code here 
    
    
    var fs = require('fs');
    var path = './fresh.txt';

    fs.access(path, fs.F_OK, (err) => {
  if (err) {
    console.log('FS operation failed')
    return
  }
  else {
      fs.appendFile('fresh.txt', 'I am fresh and young', function (err) {
  if (err) throw err;}
  }

  //file exists
})

};

await create();
