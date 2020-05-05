const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' })


mongoose.connect('mongodb://127.0.0.1:27017/pneu', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(err => {
    console.log(err)
})


 app.listen(process.env.PORT, () => {
    console.log(`server created on port ${process.env.PORT}`)
})
