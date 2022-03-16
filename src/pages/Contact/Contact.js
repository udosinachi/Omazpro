import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { Con } from './Style'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Con>
        <div className='sub-link'>
          <Link to='/' className='link'>
            HOME
          </Link>
          <ChevronRightIcon className='icon' />
          <span>CONTACT</span>
        </div>
      </Con>
    </div>
  )
}

export default Contact
