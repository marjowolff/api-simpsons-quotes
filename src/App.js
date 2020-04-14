import React from 'react';
// import logo from './logo.svg';
import './Components/style.css';
import Navbar from './Components/Navbar'
//import QuoteCard from './Components/QuoteCard'
import QuoteCard from './Components/QuoteCard'
import axios from 'axios'

const newCharacter = {
  quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  
}

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      character : newCharacter
    }
    this.getCharacter = this.getCharacter.bind(this)
  }
  
getCharacter(){
// Send the request
axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
// Extract the DATA from the received response
.then(response => response.data)
// Use this data to update the state
.then(data => {
  this.setState({
    character: data[0],
  });
  console.log(data[0])
});
}

  render () {return (
    <div><div className="Navbar">
      <Navbar/>
    </div>
    {/* <button type="button" onClick={this.getEmployee}>Get employee</button> */}
    <button type="button" onClick={this.getCharacter}>Get a new quote</button>
    <div>
      <QuoteCard character={this.state.character} /></div>

    </div>
  );}
}

export default App;
