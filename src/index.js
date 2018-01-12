import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './Reducers/index';

import App from './App';
import {initDB} from './Actions';
import Contact from './Components/Contact/Contact';
import Albums from './Components/Albums/Albums'
import Inquiry from './Components/Inquiry/Inquiry'
import Gallery from './Components/Gallery/Gallery'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware()
export const store = createStore(allReducers, middleware);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/Albums' component={Albums}/>
        <Route exact path='/Bookings' component={Inquiry}/>
        <Route exact path='/Contact' component={Contact}/>
        <Route exact path='/Gallery' component={Gallery}/>
        <Route path="*" render={() => (<Redirect to="/"/>)} />
      </Switch>
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();

initDB();
