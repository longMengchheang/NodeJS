const Book = require('../models/book')
const { all } = require('../routes/book-routes')

const getAllBooks = async(req,res)=> {
    try{
        const allBooks = await Book.find({})
        if(allBooks?.length > 0){
            res.status(200).json({
                success : true,
                message : 'List of books fetched successfully',
                data : allBooks
            })
        }else{
            res.status(404).json({
                success : false,
                message : 'No books found in database'
            })
        }


    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Something went wrong please try again'
        })
        

    }
}

const getSingleBookById = async(req,res)=> {
    try{
        const getCurrentBookID = req.params.id
        const bookDetailbyID = await Book.findById(getCurrentBookID)

        if(!bookDetailbyID){
            return res.status(404).json({
                success : false,
                message : 'Book with current ID is not found! Please try with different ID'
            })
        }

        res.status(200).json({
            success : true,
            data : bookDetailbyID
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Something went wrong please try again'
        })
        
    }
    
}

const addNewBook = async(req,res)=> {
    try{
        const newBookFormData = req.body
        const newlyCreatedBook = await Book.create(newBookFormData)
        if(newlyCreatedBook){
            res.status(201).json({
                success : true,
                message : 'Book added successfully',
                data : newlyCreatedBook,
            })
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Something went wrong please try again'
        })
        
    }
}

const updateBook = async(req,res)=> {
    try{
        const updatedBookFromData = req.body
        const getCurrentBookID = req.params.id
        const updatedBook = await Book.findByIdAndUpdate(
            getCurrentBookID, 
            updatedBookFromData,
            {
            new : true
        })

            if(!updatedBook){
            res.status(404).json({
                success : false,
                message : 'Book is not found with this ID'
            })
        }

        res.status(200).json({
            success : true,
            message : 'Book updated successfully',
            data : updatedBook
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Something went wrong please try again'
        })

    }
    
}

const deleteBook = async(req,res)=> {
    try{
        const getCurretnBookID = req.params.id
        const deletedBook = await Book.findByIdAndDelete(getCurretnBookID)

        if(!deletedBook){
            res.status(404).json({
                success : false,
                message : 'Book is not found with this ID'
            })
        }

        res.status(200).json({
            success : true,
            data : deletedBook
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : 'Something went wrong please try again'
        })

    }
    
}

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook,
}
