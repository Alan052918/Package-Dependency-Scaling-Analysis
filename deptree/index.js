const dependencyTree = require('dependency-tree');

// const tree = dependencyTree({
//   filename: '/Users/aijunda/GitHub/thal/index.js',
//   directory: '/Users/aijunda/GitHub/thal'
// });

// console.log(tree);

// let list = dependencyTree.toList({
//   filename: '/Users/aijunda/GitHub/thal/index.js',
//   directory: '/Users/aijunda/GitHub/thal'
// });

// console.log(list);

let pkg = dependencyTree.toPackage({
  filename: '/Users/aijunda/GitHub/thal/index.js',
  directory: '/Users/aijunda/GitHub/thal'
});

console.log(pkg);
