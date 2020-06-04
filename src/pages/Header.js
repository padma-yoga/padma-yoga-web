import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Link from '@material-ui/core/Link'
import './style.css'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span className="menu"> Menu </span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <span className="links">Home</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/login">
            <span className="links">Login</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/register">
            <span className="links">Cadastro</span>
          </Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link href="/users">
            <span className="links">Listagem</span>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
