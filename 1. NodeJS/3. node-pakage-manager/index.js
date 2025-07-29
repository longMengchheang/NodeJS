const lodash = require('lodash');

const names = ['kaze', 'yami', 'ryuzei'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);