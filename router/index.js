
const genreRouter = require('./genre.js')
const publisherRouter = require('./publisher')
const authorRouter = require('./author')
const bookRouter = require('./book')
const userRouter = require('./user')
const authRouter = require('./auth')

const orderRouter = require('./order')

function routes(app) {
    
    app.use('/api/v1/genres', genreRouter)
    app.use('/api/v1/publishers', publisherRouter)
    app.use('/api/v1/authors', authorRouter)
    app.use('/api/v1/books', bookRouter)
    app.use('/api/v1/users', userRouter)
    app.use('/api/v1/auth', authRouter)

    app.use('/api/v1/orders', orderRouter)

    app.use('*', function(req, res) {
        res.status(404).json({
            error: 404,
            message: 'Not Found'
        })
    })
   
}

module.exports = routes