function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve, time))
}

console.log('Promise lecture starts')
delayFn(2000).then(()=> console.log('after 2 sec promise resolve'))
console.log('end');

function divideFn(num1,num2){
    return new Promise((resolve, reject)=>{
        if(num2===0){
            reject('Cannot divide by 0')
        } 
        else{
            resolve(num1/num2)
        }
    })
}
divideFn(10,0)
    .then(result=> console.log(result, 'res'))
    .catch(error=> console.log(error, 'err'))
