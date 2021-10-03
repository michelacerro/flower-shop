// Styles
import '../css/App.css';

// Dependencies
import React from 'react';
import {BrowserRouter as Browser, Route, Switch} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Error from './pages/Error';

// Components
import Header from './components/Header';


const App = () => {
  return (
    <div className="App">
      <Browser>
        <Header />
        <div className='pages'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component ={Products} />
            <Route exact path='/contacts' component={Contacts} />
            <Route component={Error} />
          </Switch>
        </div>
      </Browser>
    </div>
  );
}

export default App;
