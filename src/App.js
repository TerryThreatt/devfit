import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage.component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Route exact path='/' component={Homepage} />
      <Route path="/hats"  component={HatsPage} />
    </div>
  );
}

export default App;
