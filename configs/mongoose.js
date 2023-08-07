const mongoose=require('mongoose');
const url='mongodb://127.0.0.1/EMPLOYEES_REVIEW_SYSTEM'
// const url='mongodb+srv://kamranrafiq805:kamranrafiqsofi@cluster0406.8ritmss.mongodb.net/EMPLOYEES_REVIEW_SYSTEM'
mongoose.connect(url);
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error:Cannot connect to db::Mongodb'))


// once connection is open (started)
db.once('open', (err) => {
    if (err) {
        console.log('Error: while opening db connection', err);
    } else {
        console.log('DB connection successfull :: MongoDB');
    }
})


module.exports = db;