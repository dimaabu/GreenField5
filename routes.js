<<<<<<< HEAD
const express = require('express');
const routers = express.Router();
//User Controller 
const userController = require('./Controller/UserController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);
routers.post('/logout', userController.userlogout)

//Payment 
const paymentController = require('./Controller/PaymentController')
routers.post('/payment', paymentController.payment)



const auth = require('./auth')
routers.get('/check', auth, (req, res) => {
    res.status(200).send(req.user)
})



module.exports = routers;
=======
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


const auth = require('./auth')
routers.get('/check', auth, (req, res) => {
    res.status(200).send(req.user)
})



module.exports = routers;
>>>>>>> 4ae08cebd83d723ab7fe1410ccc3c565ca2a08ea
