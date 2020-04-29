const fs = require('fs');
const path = require('path');

const dir = '/Users/aijunda/GitHub/thal/node_modules/ws/lib/validation.js';
const dl = dir.split(path.sep);
console.log(dl);
console.log(dl[dl.length-2]);

while (dl[dl.length-2] != 'node_modules') {
  dl.pop();
}
const pkgPath = dl.join('/').concat('/', 'package.json')
console.log(pkgPath);

if (fs.existsSync(pkgPath)) {
  const rawData = fs.readFileSync(pkgPath);
  const pkgJson = JSON.parse(rawData);
  // console.log(pkgJson);
  console.log(pkgJson['_id']);
}
