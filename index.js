const express= require('express')
const expressLayouts=require('express-ejs-layouts')
const path=require('path')
// port on which app will run
const port=8000;



// Passport And Local Strategy
const passpoet=require('passport')
// const localStrategy=
const cookieParser=require('cookie-parser')
const session=require('express-session')
const MongoStore=require('mongodb');

// usage
const app=express();
app.use(express.json());
app.use(urlencoded({ extended:true}));
app.use(cookieParser());


// session setup
// app.use(session({
//     name: 'ERS',
//     secret: process.env.ERS_SESSION_SECRETE,
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24,
//     },
//     store: MongoStore.create({
//         mongoUrl: process.env.ERS_DB_URI,
//         collectionName: 'session',
//         autoRemove: 'native'
//     })
// }));


// passport middlewares
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.setAuthenticatedUser);


// app.use(express.static(path.join(__dirname, 'public'))); // public | static file 

app.use(express.static(path.join(__dirname, 'assets'))); // public | static file 


// ejs setup
// app.use(expressLayouts);
app.use(expressLayouts);

// individual css
// app.set('layout extractStyles', true);
// individual js

// app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// extract scripts and styles from webpage body
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use('/', require('./routes/index')); // setting up routing file



app.listen(port, (err) => {
    if (err) {
        console.log('Error while starting server: ', err);
    } else {
        console.log(`server is up and running at port ${port}`);
    }
})
