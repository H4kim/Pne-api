const express = require('express');
const morgan = require('morgan');
const errorCotnroller = require('./controllers/errorsController')
const fournisseurRoute = require('./routes/fournisseurRoute');
const stockRoute = require('./routes/stockRoute')
const pneuDimensionRoute = require('./routes/pneuDimensionRoute')
const productRoute = require('./routes/productRoute')
const app = express();

app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/fournisseurs' , fournisseurRoute)
app.use('/api/stock' , stockRoute)
app.use('/api/pneu-dimension' , pneuDimensionRoute)
app.use('/api/products' , productRoute)


//show error for No route defined 
app.use('*' , (req,res,next) => {
    res.status(404).json({
        status : 'fail',
        message : 'No route with this link :p '
    })
})

//Global error handler
app.use(errorCotnroller)

module.exports = app;