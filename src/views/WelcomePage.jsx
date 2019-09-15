import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Fullscreen = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;
`
export default function WelcomePage(){
    return (
        <Fullscreen>
            <Typography color="sedcondary" variant="h1" component="p">
                WELCOME!
            </Typography> 
        </Fullscreen>
    )
}