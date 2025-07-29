const express = require('express')
const app = express()

const requestTimestampLogger = (req,res,next)=>{
    const timeStamp = new Date().toISOString()

    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(requestTimestampLogger)

app.get('/', (req,res)=>{
    res.send('Home Page')
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})

app.listen(3000, ()=>{
    console.log(`Server is now ruuning on port 3000`)
})