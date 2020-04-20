import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Catalog from './components/Catalog/Catalog';
import CartContainer from './components/Cart/CartContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';

const App = props => {

  return <div className='container'>
    <BrowserRouter>
      <Provider store={props.store}>
        <NavigationContainer />
        <div className={'content'}>
          <Route path={'/catalog'} render={() => <Catalog />}/>
          <Route path={'/cart'} render={() => <CartContainer />}/>
          <Route exact path={'/'} render={() => <Catalog />}/>
        </div>
      </Provider>
    </BrowserRouter>
  </div>
}

export default App;
