const express = require('express')
const app = express()

//define middleware function
const myFirstMiddleware = (req, res, next)=>{
    console.log('This first middleware will run on every request')
    next()
}

app.use(myFirstMiddleware)

app.get('/', (req,res)=>{
    res.send('Home Page')
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})

app.listen(3000, ()=>{
    console.log(`Server is now run on port 3000`)
})