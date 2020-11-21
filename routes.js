const express = require('express');
const routers = express.Router();
const tripController = require('./Controller/TripsController')
//User Controller 
const userController = require('./Controller/UserController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);
routers.post('/logout', userController.userlogout)

//Payment 
const paymentController = require('./Controller/PaymentController')
routers.post('/payment', paymentController.payment)

routers.get('/gettrips', tripController.tripsList)
routers.post('/gettrips', tripController.updateTrip)
routers.get('/filldata', tripController.fillTrips)
routers.get('./user', userController.userTrips);


const auth = require('./auth')
routers.get('/check', auth, (req, res) => {
    res.send(paymentController.check(req, res))
    // res.status(200).send(req.user)
})

// routers.get('/check', auth, paymentController.check)




module.exports = routers;
