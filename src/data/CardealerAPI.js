const port = '8080'
const url = "http://localhost:"+port

const employees = url+'/employees'
const carmodels = url+'/carmodels'
const total_sales = url+'/total_sales'
const sales = url+'/sales'

export default class CardealerAPIURL {
    static get employees(){
        return employees
    }
    static get sales(){
        return sales
    }
    static get carmodels(){
        return carmodels
    }
    static get total_sales(){
        return total_sales
    }
}