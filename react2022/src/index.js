import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { combineReducers, createStore, applymiddleware } from 'redux-saga';
import Main from './Main';
import MainInput from './MainInput';
import mysaga from './component/redux-saga-api/Sagas'
import MyReducers from './component/redux-saga-api/MyReducers';
import Test from './Test';
import Hoc from './component/basics/Hoc';
import Login from './Login';
import UseEffect from './component/hooks/UseEffect';
import UseMemo from './component/hooks/UseMemo';
import FetchApi from './component/basics/FetchApi';
import Lifecycle from './component/basics/lifecycle';
import Parent from './component/props/Parent';

// const sagaMiddleware= createSagaMiddleware();
// const rootReducer= combineReducers({MyReducers})
// const store= createStore(rootReducer, applymiddleware(sagaMiddleware));
// sagaMiddleware.run(mysaga);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  <Lifecycle/>
  </>
  // <Provider store={store}>
  //   <MainSaga/>
  // </Provider>
  
);

