import React from 'react'
import { Welcame } from './Style'

const Welcome = () => {
  return (
    <div>
      <Welcame>
        <div className='welcome-div'>
          <div className='image-div'>
            <img src='/images/Oma-header.jpg' alt='welcome' />
          </div>

          <div className='text-div'>
            <span>
              <strong>WELCOME</strong>
              <br /> TO THE BEST HAIRDRESSING SALON IN NEW YORK!
            </span>
            <p>
              This salon, founded by three best friends Mary, Brenda and Alberta
              is now the Lagos women staple for either getting a nice and
              beautiful hairdo, chit chatting with their favorite stylist or
              just to feel special again. We are proud that within just a few
              years after we opened up our doors, the salon became so popular!
              In large we are sure that our incredible, artistic and tasteful
              stylists and our down-to-earth, non-NYC price range contributed to
              that fact.
            </p>
          </div>
        </div>
      </Welcame>
    </div>
  )
}

export default Welcome
