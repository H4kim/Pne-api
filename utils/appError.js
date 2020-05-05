class AppError extends Error {
    constructor(message,statusCode) {
        super()
        this.message = message;
        this.statusCode = statusCode || 500;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true
        // Error.captureStackTrace(this, this.constructor) //TODO a rechercher
    }
}

module.exports = AppError