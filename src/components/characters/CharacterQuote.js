import React from 'react'

const CharacterQuote = ({ quote }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={quote.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{quote.name}</h1>
          <ul>
          <li>
              <strong>Author:</strong>{quote.author}
            </li>
            <li>
              <strong>quote</strong> {quote.quote}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterQuote