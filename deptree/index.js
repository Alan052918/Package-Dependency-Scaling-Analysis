const colors = require('colors');
const dependencyTree = require('dependency-tree');
const fs = require('fs');
const path = require('path');

let depList = new Set();

function traverse(currentDir) {
  console.log(colors.magenta.bold('\nEnter new directory:'), currentDir);
  let dirents = fs.readdirSync(currentDir, { withFileTypes: true });
  let dirPool = new Set();
  for (dirent of dirents) {
    let entName = currentDir.concat(path.sep, dirent.name);
    if (dirent.isFile() === true) {
      console.log(entName, colors.bgBlue.cyan.bold('is FILE'));
      let packages = dependencyTree.toPackage({
        filename: currentDir.concat(path.sep, dirent.name),
        directory: currentDir
      });
      if (packages.length > 0) {
        // console.log(currentDir.concat(path.sep, dirent.name), packages);
        for (pkg of packages) {
          if (!depList.has(pkg)) {
            depList.add(pkg);
          }
        }
      }
    }
    if (dirent.isDirectory() === true) {
      console.log(entName, colors.bgBlue.yellow.bold('is DIRECTORY'));
      dirPool.add(currentDir.concat(path.sep, dirent.name));
      // traverse(currentDir.concat(path.sep, dirent.name));
    }
  }
  for (dirItem of dirPool) {
    traverse(dirItem);
  }
}

traverse('/Users/aijunda/Documents/CS319\ Innovative\ Experiments/Package-Dependency-Scaling-Analysis/vue');
console.log('\n');
console.log(depList);
console.log('writing result to file');
fs.writeFileSync('./realdep-list.txt', JSON.stringify(Array.from(depList)));
