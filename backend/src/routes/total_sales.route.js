const router = require('express').Router()

const Sales = require('../models/sales.model')
const Employee = require('../models/employee.model')
const Carmodel = require('../models/carmodel.model')


//GoThrough all employees
//Add sales to json object. Calculate sales by checking all sales with same employee id, then check carmodel with id and get price. 