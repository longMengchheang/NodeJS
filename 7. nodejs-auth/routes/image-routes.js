const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController, fectchImageController, deleteImageController} = require('../controllers/image-controller')

const router = express.Router()


//upload the image
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), uploadImageController) 

//to get all the images
router.get('/get',authMiddleware, fectchImageController)

//delete image route
//688639745ab72dae91b80bdc
router.delete('/:id', authMiddleware, adminMiddleware, deleteImageController)

module.exports = router