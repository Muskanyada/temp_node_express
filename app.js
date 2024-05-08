//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particulaqr project
//npm i <packageName>

//global dependency -use ot in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init(step by step , press enter to skip)
//npm init -y (everything default)
//npm i lodash: The Lodash npm is used to install and import Lodash library using npm module. The command for installation of Lodash using npm module is npm i lodash


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
