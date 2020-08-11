import React from 'react';
import './CSS/Main.css';
import {Switch,Route} from 'react-router-dom'

 import Main from './Pages'

function App() {
  return (
    <Switch>
      <Route path="/" component={Main}/>
    </Switch>
  );
}

export default App;
