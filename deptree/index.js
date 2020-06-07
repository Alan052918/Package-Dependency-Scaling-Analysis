const dependencyTree = require('dependency-tree');
const fs = require('fs');
const path = require('path');

let depList = [];

function traverse(currentDir) {
  // console.log('\nEnter new directory: ', currentDir);
  let dirents = fs.readdirSync(currentDir, { withFileTypes: true });
  for (dirent of dirents) {
    // console.log(dirent.name);
    if (dirent.isFile() === true) {
      // console.log('\tis FILE');
      let packages = dependencyTree.toPackage({
        filename: currentDir.concat(path.sep, dirent.name),
        directory: currentDir
      });
      if (packages.length > 0) {
        console.log(currentDir.concat(path.sep, dirent.name), packages);
        for (pkg of packages) {
          if (!depList.includes(pkg)) {
            depList.push(pkg);
          }
        }
      }
    }
    if (dirent.isDirectory() === true) {
      // console.log('\tis DIRECTORY: ', currentDir.concat(path.sep, dirent.name))
      traverse(currentDir.concat(path.sep, dirent.name));
    }
  }
}

traverse('/Users/aijunda/GitHub/thal');
console.log('\n');
console.log(depList);
