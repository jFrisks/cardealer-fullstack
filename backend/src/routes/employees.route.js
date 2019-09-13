const router = require('express').Router()
const Employee = require('../models/employee.model')

//{url}/employees
router.route('/').get((req,res) => {
    Employee.find()
        .then(employees => res.status(200).json(employees))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').post((req, res) => {
    const name = req.body.name
    const newEmployee = new Employee({name})

    newEmployee.save()
        .then(employee => res.status(200).json(employee))
        .catch(err => res.status(400).json('Error: ' + err))
})

/* 
    <---  MORE ROUTES --->
*/

module.exports = router;