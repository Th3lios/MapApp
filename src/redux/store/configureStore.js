import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(ReduxThunk)),
  );

  const persistor = persistStore(store);
  return {store, persistor};
};
