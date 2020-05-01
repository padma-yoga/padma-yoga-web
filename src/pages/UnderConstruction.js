import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import image from 'assets/underConstruction.jpg'

function UnderConstruction() {
  return (
    <Container>
      <Grid justify="center" spacing={50}>
        <Typography variant="h1">Bem vindo a Padma Yoga</Typography>
        <Grid>
          <img src={image} alt="underConstruction" width="100%" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default UnderConstruction
