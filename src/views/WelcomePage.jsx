import React from 'react'
import styled from 'styled-components'
import { Typography, Button } from '@material-ui/core'

import ReadData from '../data/ReadData'
import data from '../data/data.json'

const Fullscreen = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;
`
export default function WelcomePage(){
    function postData(data){
        console.log(data)
        ReadData().readJson(data.carshop)
    }

    return (
        <Fullscreen>
            <Typography color="secondary" variant="h1" component="p">
                WELCOME!
            </Typography> 
            <Button onClick={() => postData(data)} color="primary">
                DANGER! Add all data from data.json
            </Button>
        </Fullscreen>
    )
}