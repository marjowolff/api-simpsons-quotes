import React from 'react';
// import logo from './logo.svg';
import './Components/style.css';
import Navbar from './Components/Navbar'
//import QuoteCard from './Components/QuoteCard'
import QuoteList from './Components/QuoteList'


function App() {
  return (
    <div><div className="Navbar">
      <Navbar/>
    </div>
    <div>
      <QuoteList /></div>
    {/* <div>
      <QuoteCard characterFirstName="Homer" characterLastName="Simpson" quote="I believe the children are the future... Unless we stop them now!" image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"/>
    </div>
    <div>
      <QuoteCard characterFirstName="Homer" characterLastName="Simpson" quote="Ahh! Sweet liquor eases the pain." image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112"/>
    </div>
    <div>
      <QuoteCard characterFirstName="Homer" characterLastName="Simpson" quote="I'm sleeping in the bath tub." image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205"/>
    </div>
    <div>
      <QuoteCard characterFirstName="Homer" characterLastName="Simpson" quote="Vivement ce soir qu'on se couche"/>
    </div> */}
    </div>
  );
}

export default App;
