module.exports = `
  import { createStore, applyMiddleware } from 'redux';
  import { composeWithDevTools } from 'redux-devtools-extension';
  import createSagaMiddleware from 'redux-saga';
  
  import sagas from './sagas';
  import rootReducer from './reducer';
  
  const sagaMiddleware = createSagaMiddleware();
  
  const store = createStore(
    rootReducer,
    composeWithDevTools({ maxAge: 200 })(applyMiddleware(sagaMiddleware))
  );
  
  sagaMiddleware.run(sagas);
  
  export default store;
`;
