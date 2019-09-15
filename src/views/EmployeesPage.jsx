import React from 'react'
import axios from 'axios'

import CardealerAPIURL from '../data/CardealerAPI'

import EmployeeCard from '../components/EmployeeCard'
import { Grid, Container } from '@material-ui/core'

class EmployeesPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
    }

    async componentDidMount() {
        try{
            const response = await axios.get(CardealerAPIURL.employees)
            const employees = response.data
            this.setState({
                employees
            })
        }catch(e){
            console.error(e)
        }
    }

    render(){
        return (
            <div>
                <Grid container spacing={2} justify="center" >
                    {this.state.employees.map(employee => (
                        <Grid key={employee._id} item lg={6}>
                            <EmployeeCard key={employee._id} data={employee}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

export default EmployeesPage