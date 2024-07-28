import {Router} from "express";
const router = Router();


//  import all controllers
import * as controller from '../controller/appcontroller.js';


// -----------------  Post Methods ------------

router.route('/register').post(controller.register);        // register user

// router.post('/registerMail', );         // send mail
router.post('/authenticate', (req, res)=>res.end());         // authenticate
router.post('/login', controller.login);      //  login in app


// -----------------  Get Methods ------------


router.get('/user/:username', controller.getUser);        // user with username
router.get('/generateOTP', controller.generateOTP);       // generate random OTP
router.get('/verifyOTP', controller.verifyOTP);          // verify OTP
router.get('/createResetSession', controller.createResetSession);             // reset  all variables

// -----------------  Put Methods ------------
router.put('/updateuser',controller.updateUser);        // is use to update user profile
router.put('/resetPassword',controller.resetPassword);         //  use to reset password


export default router;


