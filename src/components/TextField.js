import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropType from 'prop-types'

function StyledTextField(props) {
  const {
    variant,
    margin,
    required,
    label,
    type,
    name,
    error,
    autoComplete,
    autoFocus,
    onChange,
    helperText,
    value,
  } = props

  return (
    <TextField
      name={name}
      id={name}
      label={label}
      variant={variant}
      margin={margin}
      required={required}
      type={type}
      autoComplete={autoComplete}
      autoFocus={!!autoFocus}
      onChange={onChange}
      helperText={helperText}
      fullWidth
      value={value}
      error={error}
    />
  )
}

StyledTextField.propTypes = {
  name: PropType.string.isRequired,
  label: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  variant: PropType.string,
  margin: PropType.string,
  required: PropType.bool,
  type: PropType.string,
  autoComplete: PropType.string,
  helperText: PropType.string,
  autoFocus: PropType.bool,
  error: PropType.bool,
  value: PropType.oneOf([PropType.string, PropType.number]),
}

StyledTextField.defaultProps = {
  variant: 'outlined',
  margin: 'normal',
  required: true,
  type: 'email',
  autoComplete: null,
  helperText: null,
  autoFocus: false,
  error: false,
  value: '',
}

export default StyledTextField
