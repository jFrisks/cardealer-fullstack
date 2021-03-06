import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { Container, Grid, Fab } from '@material-ui/core'
import CarmodelCard from '../components/CarmodelCard'
import CarmodelAddDialog from '../components/CarmodelAddDialog'
import AddIcon from '@material-ui/icons/Add';

import CardealerAPIURL from '../data/CardealerAPI'

const Hover = styled.div`
    position: fixed;
    bottom: 2vw;
    right: 2vw;
`
class CarmodelsPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            carmodels: [],
            editOpen: false,
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSetEditOpen = this.handleSetEditOpen.bind(this)
    }

    componentDidMount(){
        this.getAndSetCarmodels()
    }

    getAndSetCarmodels() {
        axios.get(CardealerAPIURL.carmodels)
            .then(res => {
                this.setState({
                    carmodels: res.data
                })
            })
            .catch(err => console.error(err))
    }

    handleDelete(id){
        //delete req
        const body = {
            id
        }
        axios.delete(CardealerAPIURL.carmodels, { data: body })
            .then(res => console.log('deleted carmodel:', res))
            .catch(err => console.error(err))

        //delete locally
        this.setState({
            carmodels: this.state.carmodels.filter(carmodel => carmodel._id !== id)
        })
    }

    handleEdit(id, closeCb){
        this.handleSetEditOpen(true)

        //post edit

        //edit locally

        //close menu
        closeCb()
    }

    handleSetEditOpen(editOpen){
        console.log('settinging open to ', editOpen)
        this.setState({
            editOpen
        })
    }

    async handleAdd(submission){
        //add to real database. save return
        try{
            const resp = await axios.post(CardealerAPIURL.carmodels, submission)
            const newCarmodel = resp.data
             //const createdData = {...submission, id: this.state.carmodels.length*2+1}

            this.setState(prev => ({
                carmodels: [...prev.carmodels, newCarmodel]
            }))
            this.handleSetEditOpen(false)
            }
        catch(e){
            console.error(e)
        }
    }
    
    render(){
        const addButton = (
            <Fab variant="extended" color="secondary" aria-label="add" onClick={() => this.handleSetEditOpen(true)}>
                <AddIcon />
                Add Carmodel
            </Fab>
        )

        return (
            <div>
                <Container>
                    <Grid
                        container
                        spacing={2}
                        justify="center"
                    >
                        {this.state.carmodels.map(carmodel => (
                            <Grid key={carmodel._id} item xs={12} lg={3} sm={6}>
                                <CarmodelCard key={carmodel._id} data={carmodel} onDelete={() => this.handleDelete(carmodel._id)} onEdit={(closeCb) => this.handleEdit(carmodel._id, closeCb)}/>
                            </Grid>
                        ))}
                    </Grid>
                    <Hover>
                        {addButton}
                        <CarmodelAddDialog open={this.state.editOpen} onAdd={this.handleAdd} handleClose={() => this.handleSetEditOpen(false)}/>
                    </Hover>
                </Container>
            </div>
        )
    }
}

export default CarmodelsPage