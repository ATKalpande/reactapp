import React from 'react'
import CharaterItem from './CharaterItem'
import CharacterQuote from './CharacterQuote'



const CharacterGrid = ({ items,quotes,isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharaterItem key={item.char_id} item={item}></CharaterItem>

      ))}
       { quotes.map((quote) => (
        <CharacterQuote key={quote.quote_id} quote={quote}></CharacterQuote>

      ))}
    </section>
  )
}

export default CharacterGrid 


