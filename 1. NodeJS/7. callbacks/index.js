const fs = require('fs')


function person(name, callbackFn){
    console.log(`Hello ${name}`)
    callbackFn()

}

function address(){
    console.log('Japan')

}

person('Kaze', address)

fs.readFile('input.txt', 'utf8', (err, data)=> {
    if (err){
        console.error('Error reading file', err)
        return
    }

    console.log(data);
});