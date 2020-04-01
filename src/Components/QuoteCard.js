import React from 'react'
import PropTypes from 'prop-types';

const QuoteCard = (props) => 
<figure className="QuoteCard">
    <img
      src={props.image}
      alt={props.character}/>
    <figcaption>
      <blockquote>
        {props.quote}</blockquote>
      <cite>{props.character}</cite>
    </figcaption>
  </figure>

// QuoteCard.propTypes = {
//   characterFirstName: PropTypes.string.isRequired,
//   characterLastName: PropTypes.string.isRequired,
// };

export default QuoteCard