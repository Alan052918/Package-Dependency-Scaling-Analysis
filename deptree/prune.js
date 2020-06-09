const colors = require('colors');
const fs = require('fs');
const Path = require('path');

const isUnixHiddenPath = (path) => {
  return (/(^|\/)\.[^\/\.]/g).test(path);
}

const isCollectionFolder = (path) => {
  return (/(^|\/)\@[^\/\.]/g).test(path);
}

const deleteFolderRecursive = (path) => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      const curPath = Path.join(path, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

const traverse = (currentDir) => {
  console.log(colors.magenta.bold('\nNew directory'), currentDir);
  const dirSegments = currentDir.split(Path.sep);
  fs.readdir(currentDir, { withFileTypes: true }, function (err, dirents) {
    if (err) throw err;
    let dirPool = new Set();
    for (dirent of dirents) {
      if (dirent.isFile()) {
        continue;
      }

      let entPath = currentDir.concat(Path.sep, dirent.name);

      if (isUnixHiddenPath(entPath)) {
        console.log(entPath, "Hidden path".yellow.bold);
        continue;
      }

      if (isCollectionFolder(entPath)) {
        console.log(entPath, "Collection path".yellow.bold);
        continue;
      }

      // check for redundant package
      if (dirSegments[dirSegments.length - 1] == 'node_modules' && !realDeps.includes('\"'.concat(entPath, '\"'))) {
        console.log(entPath.red, colors.bgBlue.red.bold('Redundant package'));
        deleteFolderRecursive(entPath);
        continue;
      }

      console.log(entPath.green);
      dirPool.add(entPath);
    }
    for (dir of dirPool) {
      traverse(dir);
    }
  });
}

const txt = fs.readFileSync('./delete-list.txt', 'utf-8');
const realDeps = txt.split(',\n');
traverse('/Users/aijunda/Documents/CS319\ Innovative\ Experiments/Package-Dependency-Scaling-Analysis/axios/node_modules');
