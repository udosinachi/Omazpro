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

        <div className='heading'>
          <div>
            <strong>MY</strong> LOCATION
          </div>
          <p>VISIT THE BEST HAIRDRESSING SALON IN CALABAR</p>
          <span>425W. 14th Street, 2nd FloorNew York, New York 10014</span>
        </div>

        <div className='contact-form'>
          <div className='form-head'>
            <div>
              <strong>CONTACT ME</strong> TODAY
            </div>
            <p>
              GET IN TOUCH WITH ME REGARDING ANY QUESTIONS ON OUR SERVICES OR
              SIMPLY TO BOOK AN APPOINTMENT!
            </p>
          </div>

          <form>
            <label>
              Your Name:
              <input type='text' />
            </label>
            <label>
              Your Email:
              <input type='text' />
            </label>
            <label>
              Your Review:
              <input type='textarea' />
            </label>
            <button>Submit</button>
          </form>
        </div>
      </Con>
    </div>
  )
}

export default Contact
