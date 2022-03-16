import { Nav } from './Style'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='sticky' className='bar'>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}> </Box>

              <Typography
                variant='h6'
                component='div'
                sx={{ flexGrow: 1 }}
                className='oma'
              >
                Omazpro
              </Typography>
            </Toolbar>
            <div className='link-div'>
              <Link to='gallery' className='link'>
                About
              </Link>
              <Link to='gallery' className='link'>
                Services
              </Link>
              <Link to='gallery' className='link'>
                Gallery
              </Link>
              <Link to='gallery' className='link'>
                Products
              </Link>
              <Link to='contact' className='link'>
                Contact
              </Link>
            </div>
          </AppBar>
        </Box>
      </Nav>
    </div>
  )
}

export default Navbar
