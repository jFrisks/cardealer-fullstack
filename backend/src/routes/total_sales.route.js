const router = require('express').Router()

const Sales = require('../models/sales.model')
const Employee = require('../models/employee.model')
const Carmodel = require('../models/carmodel.model')

router.route('/').get((req, res) => {
    //TODO - do faster and better query combine of employees, sales, carmodels
    Employee.find().lean().exec()
        .then(employees => {
            //Create promises to get totalSales and locally add to employee data
            const totalSalesPromises = employees.map(employee => {
                return Sales.find({employee_id: employee._id}).lean().exec()
                    .then(salesByEmployee => {
                        //get all carmodel_id sold by employee
                        const ids = salesByEmployee.map(sales => sales.carmodel_id)
                        //return promise of calculated totalSales for ids of cars
                        return calcTotalSales(ids)
                            .then(totalSales => {
                                console.log('Employee id: ' + employee._id)
                                console.log('-Sales by employee: ' + ids)
                                console.log('--totalSales: ' + totalSales)
                                //Created promise with new modified employee
                                return new Promise((res, rej) => {
                                    res({...employee, sales: totalSales})
                                })
                            })
                            .catch(err => new Error(err))
                    })
                    .catch(err => new Error(err))
            })

            //wait for all promises to be completed
            Promise.all(totalSalesPromises)
                .then(modifiedEmployee => {
                    res.status(200).json(modifiedEmployee)
                })
                .catch(err => {throw new Error(err)})
        })
        .catch(err => res.status(400).json(err))
})

const getCarPrice = async (id) => {
    try {
        const carmodel = await Carmodel.findById(id, 'price').exec()
        return Number(carmodel.price)
    }
    catch(e){
        return new Error(e)
    }
}

const calcTotalSales = async (ids) => {
    // const promises = ids.map(id => {
    //     return getCarPrice(id)
    //         .then(price => {
    //             console.log('carPrice: ' + price)
    //             return new Promise((res, rej) => res(price))
    //         })
    //         .catch(err => new Error(err))
    // })

    // return Promise.all(promises)
    //     .then(prices => {
    //         return prices.reduce((a,b) => a + b, 0)
    //     })
    //     .catch(err => new Error(err))
    try{
        let prices = []
        for(let id of ids){
            const price = await getCarPrice(id)
            prices = [...prices, price]
        }
        const totalSales = prices.reduce((a,b) => a + b, 0)
        return totalSales
    }
    catch(e){
        throw new Error(e)
    }   
}

module.exports = router;