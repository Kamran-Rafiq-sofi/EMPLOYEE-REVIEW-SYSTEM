

const production={
    name:'production',
    name:process.env.ERS_ENVIRONMENT,
    asset_path:process.env.ERS_ASSET_PATH,
     session_cookie_key:process.env.ERS_SESSION_COOKIE_KEY ,
    db:process.env.ERS_DATABASE,
   

    
}
module.exports=eval(process.env.ERS_ENVIRONMENT)==undefined? production:eval(process.env.ERS_ENVIRONMENT);

