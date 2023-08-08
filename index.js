const express= require('express')
const expressLayouts=require('express-ejs-layouts')
const path=require('path')
// port on which app will run
const port=8000;
const db=require('./configs/mongoose')

// flash and noty
const flash=require('connect-flash');
const noty=require('noty');
const customMware = require('./configs/middleware');




// Passport And Local Strategy
const passport=require('passport')
const localStrategy=require('./configs/passport_local_strategy')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const MongoStore=require('connect-mongo');

// Environment variable
const env=require('./configs/environment');


// usage
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());


// session setup
app.use(session({
    name: 'ERS',
    // secret: 'Review',
    secret: env.session_cookie_key,

    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    store: MongoStore.create({
        // mongoUrl: 'mongodb+srv://kamranrafiq805:kamranrafiqsofi@cluster0406.8ritmss.mongodb.net/EMPLOYEES_REVIEW_SYSTEM',
        // mongoUrl:'mongodb://127.0.0.1/EMPLOYEES_REVIEW_SYSTEM',
        mongoUrl:`mongodb://127.0.0.1/${env.db}`,

        collectionName: 'session',
        autoRemove: 'native'
    })
    
}));


// passport middlewares
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use flash
app.use(flash());
app.use(customMware.setflash);


// app.use(express.static(path.join(__dirname, 'public'))); // public | static file 

// app.use(express.static(path.join(__dirname, 'assets'))); // public | static file 
app.use(express.static(path.join(__dirname, env.asset_path))); // public | static file 


// ejs setup

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

