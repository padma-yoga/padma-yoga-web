import React from 'react'
import PropType from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(() => ({
  root: {
    height: 'calc(100vh - 48px)',
  },
}))

function Page({ children }) {
  const classes = useStyle()
  return (
    <Grid container className={classes.root}>
      {children}
    </Grid>
  )
}

Page.propTypes = {
  children: PropType.node.isRequired,
}

export default Page
