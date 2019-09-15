import axios from 'axios'

import CardealerAPI from './CardealerAPI'

export default function ReadData(){
    const employees = new Map()
    const carmodels = new Map()
    
    async function addEmployee({id, name}){
        //post data except id
        //save to map with entry (id, newId)
        try{
            const res = await axios.post(CardealerAPI.employees,{name})
            console.log(res)
            employees.set(id, res.data._id)
        }catch(e){
            console.error(e)
        }
    }

    async function addSale({id, employee_id, carmodel_id}){
        try{
            const realEmployeeID = employees.get(employee_id)
            const realCarmodelID = employees.get(carmodel_id)
            const saleres = await axios.post(CardealerAPI.sales,{employee_id: realEmployeeID, carmodel_id: realCarmodelID})
            console.log(saleres)
        }catch(e){
            console.error(e)
        }
    }

    async function addCarmodel({id, brand, model, price}){
        try{
            const res = await axios.post(CardealerAPI.carmodels,{brand, model, price})
            console.log(res)
            carmodels.set(id, res.data._id)
        }catch(e){
            console.error(e)
        }
    }

    async function _readJSON(object){
        try{
            const {employees, sales, carmodels} = object
    
            const employeePromises = employees.map(employee => addEmployee(employee))
            await Promise.all(employeePromises)
            
            const carmodelsPromises = carmodels.map(carmodel => addCarmodel(carmodel))
            await Promise.all(carmodelsPromises)
    
            const salesPromises = sales.map(sale => addSale(sale))
            await Promise.all(salesPromises)
        }catch(e){
            throw new Error(e)
        }
    }

    function readJson(object){
        _readJSON(object)
            .then(() => console.log('Successfully posted all files from data.json'))
            .catch()
    }

    return {readJson}
}