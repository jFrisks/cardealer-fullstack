const router = require('express').Router()

const Sales = require('../models/sales.model')
// const Employee = require('../models/employee.model')
// const Carmodel = require('../models/carmodel.model')

// add sale
router.route('/').post((req, res) => {
    const employee_id = req.body.employee_id
    const carmodel_id = req.body.carmodel_id

    // TODO: validate ids
    // Employee.exists()
    //     .then()
    //     .catch()
    // Carmodel.exists()
    //     .then()
    //     .catch()
    
    const newSale = new Sales({
        employee_id,
        carmodel_id
    })

    newSale.save()
        .then(sale => res.status(200).json(sale))
        .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/').get((req, res) => {
//     Sales.find()
//         .then(sales => res.status(200).json(sales))
//         .catch(err => res.status(400).json(err))
// })

module.exports = router;