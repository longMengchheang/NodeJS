console.log('Node module wrapper demo');

console.log('__filename in WE', __filename);
console.log('__dirname in WE', __dirname);

module.exports.greet = function (name) {
    console.log(`Hello ${name}`);
};
