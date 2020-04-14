import React from 'react'
// import PropTypes from 'prop-types';

function QuoteCard ({character}) {
  
    return (<figure className="QuoteCard" key={character.quote}>
    <img
      src={character.image}
      alt={character.character}/>
    <figcaption>
      <blockquote>
        {character.quote}</blockquote>
      <p>
        <cite>{character.character}</cite>
      </p>
    </figcaption>
  </figure>)
  
} 


// QuoteCard.propTypes = {
//   characterFirstName: PropTypes.string.isRequired,
//   characterLastName: PropTypes.string.isRequired,
// };

export default QuoteCard