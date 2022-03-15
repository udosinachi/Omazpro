import React from 'react'
import { Comm } from './Style'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const Comments = () => {
  return (
    <div>
      <Comm>
        <div className='header'>
          <strong>WHAT MY HAPPY</strong> CONSUMERS SAY
        </div>
        <div className='comment-div'>
          <div className='comment-sub-div'>
            <img src='/images/Oma-header.jpg' alt='card' />
            <div className='quote-icon'>
              <FormatQuoteIcon className='icon' />
            </div>
            <div className='text-div'>
              <p>
                I've been a customer of this same hairdressing salon since I
                moved to New York. The main stylists didn't change and they are
                still just as good as a few years back. God only know, how many
                great things these ladies did to my hair over the years
              </p>
              <h3>Geraldine Durrell</h3>
            </div>
          </div>
        </div>
      </Comm>
    </div>
  )
}

export default Comments
