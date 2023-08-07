// module.exports.home=function(req,res){
//     // return res.end('<h1>Home page rendered</h1>')
//     return res.render('home',{
//         title:'home|employee-review-system'
//     })
// }

const Company = require('../models/company');
// render Homepage
module.exports.renderHomePage=function(req,res){
    if(req.user){
        res.redirect('/user/employee');
    }
      return res.render('home',{
        title:'home||employee-review-system'
    })
}

// render SignIn page
module.exports.SignInPage=function(req,res){
    if(req.user){
        res.redirect('/user/employee');
    }
       return res.render('signin',{
        title:'signin||employee-review-system'
    })
}
// render SignUp page
module.exports.SignUpPage=async function(req,res){
    const company=await Company.find({}).select('-employees');
    if(Company.length>0){
        res.locals.company=company;
    }
    res.render('signup',{
        title:'signup||employee-review-system'
    })
}

// render create Company page
module.exports.createCompanyPage = function(req,res){
    res.render('create_company',{
        title:'create_company|| employee-review-system'
    })
}