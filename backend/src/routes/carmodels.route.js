const router = require('express').Router()
const Carmodel = require('../models/carmodel.model')

// get carmodels
router.route('/').get((req, res) => {
    Carmodel.find()
        .then(carmodels => res.status(200).json(carmodels))
        .catch(err => res.status(400).json('Error: ' + err))
})

// add carmodel
router.route('/').post((req, res) => {
    const brand = req.body.brand
    const model = req.body.model
    const price = Number(req.body.model)

    const newCarmodel = new Carmodel({
        brand,
        model,
        price
    })

    newCarmodel.save()
        .then(carmodel => res.status(200).json(carmodel))
        .catch(err => res.status(400).json('Error: ' + err))
})

// delete carmodel
router.route('/:id').delete((req, res) => {
    Carmodel.findById(req.params.id)
        .then(carmodel => res.status(200).json(carmodel))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router