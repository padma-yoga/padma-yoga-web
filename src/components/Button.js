import React from 'react'
import PropType from 'prop-types'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function StyledButton(props) {
  const { variant, label, onClick, color, className, disabled } = props

  const classes = styles()

  return (
    <Button
      onClick={onClick}
      label={label}
      variant={variant}
      className={className || classes.button}
      color={color}
      type="button"
      disabled={disabled}
      fullWidth
    >
      {label}
    </Button>
  )
}

StyledButton.propTypes = {
  label: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
  className: PropType.string,
  color: PropType.string,
  variant: PropType.string,
  disabled: PropType.bool,
}

StyledButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  className: '',
  disabled: false,
}

export default StyledButton
