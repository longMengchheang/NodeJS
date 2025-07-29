const express = require('express')
const app = express()

//Middleware
app.use(express.json())

let books = [
    {
        id : '1',
        title : 'Book1'
    },
        {
        id : '2',
        title : 'Book2'
    },
        {
        id : '3',
        title : 'Book3'
    },
]

//intro route
app.get('/', (req,res)=>{
    res.json({
        message: 'Wellcome to our bookstore api',
    })
})

//get all books
app.get('/get', (req,res)=>{
    res.json(books)
})

//get a single book'
app.get('/get/:id', (req,res)=>{
    const book = books.find(item=> item.id === req.params.id)
    if(book){
        res.status(200).json(book)
    }
    else{
        res.status(404).json({
            message: 'Book not Found!'
        })
    }
})

//add a new book
app.post('/add', (req,res)=>{
    const newBook = {
    id : Math.floor(Math.random()* 1000).toString(),
    title : `Book ${Math.floor(Math.random()* 1000)}`,
    }
    books.push(newBook)
    res.status(200).json({
        data : newBook,
        message : 'New book is added',
    })
})

//upadate a book
app.put('/update/:id', (req,res)=>{
    const findCurrentBook = books.find(bookItem => bookItem.id === req.params.id)

    if (findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title

        res.status(200).json({
            message : `Book with ID ${req.params.id} updated successully`,
            data : findCurrentBook
        })
    }   else{
        res.status(404).json({
            message : 'Book not Found!',
    })

    }
})

//delete
app.delete('/delete/:id', (req,res)=>{
    const findIndexOfCurrentBook = books.findIndex(item=> item.id === req.params.id)
    if(findIndexOfCurrentBook !== -1){
        const deletedBook = books.splice(findIndexOfCurrentBook,1)
        res.status(200).json({
            message : 'Book deleted successfully',
            data : deletedBook[0]
        })
        
    }
    else{
            res.status(404).json({
                message:'Book not found',
            })
        }
})


const port = 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})