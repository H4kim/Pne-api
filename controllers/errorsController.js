const AppError = require('../utils/appError')


//handel  CastErros  (invalid id , ...)
const handleCastErrorDB = err => {

    const message = `Invalid ${err.path} : ${err.value}`;
    return new AppError(message, 400)
}

//handel duplicate tour name error
const handleMongoErrorDB = (err) => {
    const value = err.errmsg.match(/"(.*?)"/)[0];
    const message = `Duplicate field value :  ${value}. please choose anothor value`
    return new AppError(message, 400)
}

//handle Validation Errors 
const handleValidationErrorDB = (err) => {
    const { message } = err
    return new AppError(message, 400)
}

const developmentErrorHandler = (res,err) => {

        res.status(err.statusCode).json({
            status : err.status,
            error : err,
            stack : err.stack
        })
    }

const productionErrorHandler = (res,err) => {
    if(err.isOperational) {
        console.error('ERROR 💥', err)
        res.status(err.statusCode).json({
            status : err.status,
            error : err.message
        })
    }
    else {
        console.error('ERROR 💥', err)
        return res.status(500).json({
            status : 'ERROR',
            message : 'Somthing went wrong'
        }) 
    }
}

module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    
    if(process.env.NODE_ENV === 'dev') {
        developmentErrorHandler(res,err)
    } else if(process.env.NODE_ENV === 'prod') {
        let error = { ...err }
        if (error.name === 'CastError') error = handleCastErrorDB(error)
        if (error.code === 11000) error = handleMongoErrorDB(error)
        if (error.name === 'ValidationError') error = handleValidationErrorDB(error)
        // if (error.name === 'JsonWebTokenError') error = handleJwtError()
        // if (error.name === 'TokenExpiredError') error = handleExpiredError()

        productionErrorHandler(res,error)
    } 

}