import React from 'react';
import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Const from './const.js'


const reducer = (state = Const.DEFAULTSTATE, action) => {
  switch(action.type) {
    case "ADD_EVENTS":
      return {...state, events: action.payload}
    case "ADD_CURRENT_LOCATION":
      return {...state, location: [action.payload.latitude, action.payload.longitude]}
    case "ADD_NEW_EVENT":
      return {...state, events: [...state.events, action.payload]}
    case "ADD_LOGIN_ACCOUNT_TO_STORE":
      return {...state, currentUser: action.payload }
    case "UPDATE_CONFIRMS":
      return { ...state, currentUser: { ...state.currentUser, confirm_event_info: action.payload} }
    case "ADD_CONFIRMS":
      return { ...state, currentUser: { ...state.currentUser, confirm_event_info: [...state.currentUser.confirm_event_info, action.payload]} }
    case "ADD_DONATIONS_TO_USER":
    return {...state, currentUser:{...state.currentUser, donations: [...state.currentUser.donations, action.payload]} }
    case "REMOVE_CURRENT_USER":
      return {...state, currentUser: action.payload, sponsor: false}
    case "LOGGED_IN_AS_SPONSOR":
      return {...state, sponsor: true}
    case "ADD_DONATIONS_TO_EVENT":
      return {...state, events: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer)

// store.subscribe(() => {
//   console.log('the new state is', store.getState())
//   console.log('----------');
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
