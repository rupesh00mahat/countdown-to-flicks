import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'

function HomePage() {
  return (
    <Container >
        <Box sx={{textAlign: 'left', mb:3, mt: 15,color: '#fff'}}>
        <Typography variant='h2'  fontSize={'60px'} fontWeight={400}>Welcome.</Typography>
        <Typography variant='h4' fontSize={'24px'} fontWeight={200}>Millions of movies, TV Shows and people to discover.Explore now.</Typography>
        </Box>
        <TextField 
        fullWidth
        inputProps={{style: {borderRadius: '10px', color: '#fff', fontSize: '20px'}}}
        sx={{border: '1px solid #fff', borderRadius: '10px'}} variant='outlined' onChange={()=>{}}/>
    </Container>
  )
}

export default HomePage