const express=require('express');
const router=express.Router();
const passport=require('passport')
console.log("router loaded");

const homeController=require('../controllers/home_controller')
const employeeController = require('../controllers/employee_controller')

const userRoutes=require('./user')
// SignIn SignUp homeroutes
router.get('/',homeController.renderHomePage);
router.get('/signin',homeController.SignInPage);
router.get('/signup',homeController.SignUpPage);
router.get('/create-company',homeController.createCompanyPage);


// form Submission
router.post('/create-company',employeeController.createCompany);
router.post('/create-employee',employeeController.createEmployee);
router.post('/signin',passport.authenticate('local',{
 
    successRedirect:'/user/employee',
    failureRedirect:'/signup'

}))
// user logout route
router.get('/signout',passport.checkAuthentication,employeeController.signout)
router.use('/user',userRoutes);
module.exports=router;