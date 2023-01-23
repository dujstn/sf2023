import {Button, Typography} from '@mui/material'

export default function LandingLayout(){
    
    return(
    <>
        <Typography variant='h1'>Welcome!</Typography>
        <Button variant='filled' href='/dashboard'>Hello</Button>
        <Button variant='filled' href='/dashboard/about'>About this Project</Button>
        
    </>
    )
}