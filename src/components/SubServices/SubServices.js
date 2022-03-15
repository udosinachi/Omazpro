import React from 'react'
import { Sub, Cards } from './Style'

const data = [
  {
    id: 1,
    text: 'Haircuts',
    color: '#feede9',
  },
  {
    id: 2,
    text: 'Blow Dry & Style',
    color: '#e9ffe8',
  },
  {
    id: 3,
    text: 'Hair Coloring',
    color: '#e9ffe9',
  },
  {
    id: 4,
    text: 'Hair Extension',
    color: '#feede9',
  },
]

const SubServices = (props) => {
  return (
    <div>
      <Sub>
        <div className='header'>
          <strong>HAIRDRESSING</strong> SERVICES
        </div>
        <div className='sub-div'>
          {data.map((card) => (
            <Cards key={card.id} background={card.color}>
              <img src='/images/Oma-header.jpg' alt='card' />
              <div className='text-div'>
                <h3>{card.text}</h3>
                <button>More Info</button>
              </div>
            </Cards>
          ))}
        </div>
      </Sub>
    </div>
  )
}

export default SubServices
