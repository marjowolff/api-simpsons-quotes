import React from 'react'
import './QuoteForm.css'

const MAX_LENGTH = 10

class QuoteForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            character:'Homer Simpson',
            longueurOk : true,
            carRestant: MAX_LENGTH
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        const longueur = event.target.value.length
        if (longueur <= MAX_LENGTH) {
            this.setState({character:event.target.value})
        } else {this.setState({longueurOk:false})}
        console.log(longueur)
        const restant = MAX_LENGTH - longueur
        this.setState ({carRestant : restant})
        console.log(restant)
    }

    handleSubmit (event) {
        this.setState({character:event.target.value})
    }
    
    render() {
      return (
        <form
          className="QuoteForm"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="character">Personnage:</label>
          <input
            id="character"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
            className={this.state.longueurOk ? 'length-ok' : 'length-maximum-reached'}
          />
          <p>Il vous reste : {this.state.carRestant} caractères</p>
          <p>You typed : {this.state.character}</p>
        </form>

      );
    }
  }
  

export default QuoteForm