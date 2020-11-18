const PaymentModel = require('../DataModel').payment

exports.payment = (req, res) => {

    var today = new Date();
    var ex = new Date(req.body.exDate)
    var cvv = req.body.cvv
    var creditCard = req.body.creditCard
      if (err) {
            return res.status(400).send('wrong format')
        }
        if (!data)
            return res.status(401).send('wrong data')
        else {
            if (ex.getTime() > today.getTime()) {
                return res.status(200).send(data)
            }
            else
                return res.status(406).send('expired')
        }
    }

