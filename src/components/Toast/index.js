import React from 'react'
import PropType from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import theme from 'theme/colors'

function Toast({ message, type, open, onClose, duration }) {
  function getColor(color) {
    if (color === 'success') return theme.success
    if (color === 'error') return theme.error
    if (color === 'warning') return theme.warning
    return null
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={duration}
        onClose={onClose}
      >
        <SnackbarContent
          message={message}
          style={{
            backgroundColor: type ? getColor(type) : null,
            // fontFamily: theme.typography.type.primary,
            // fontSize: theme.typography.size.sm,
            // fontWeight: theme.typography.weight.bold,
          }}
        />
      </Snackbar>
    </div>
  )
}

Toast.propTypes = {
  message: PropType.string.isRequired,
  type: PropType.string,
  open: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
  duration: PropType.number,
}

Toast.defaultProps = {
  type: undefined,
  duration: 3000,
}

export default Toast
