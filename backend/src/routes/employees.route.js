const router = require('express').Router()
const Employee = require('../models/employee.model')

//{url}/employees
router.route('/').get((req,res) => {
    Employee.find()
        .then(employees => res.status(200).json(employees))
        .catch(err => res.status(400).json('Error: ' + err))
})

/* 
    <---  MORE ROUTES --->
*/

module.exports = router;