const express = require('express')
const router = express.Router()

const bookController = require('../controller/books.controller')
const { verifyToken, isAdmin } = require('../middleware/auth')

router.get('/', bookController.getAll)
router.get('/bookId/:bookId', bookController.getByBookId)
router.get('/:id', bookController.getById)
router.post('/', verifyToken, isAdmin, bookController.create)
router.put('/:id', verifyToken, isAdmin, bookController.updateById)
router.delete('/:id', verifyToken, isAdmin, bookController.deleteById)


module.exports = router;
