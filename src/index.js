import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store';
import { sagaMiddleware } from "./store/middleware";
import rootSaga from "./store/sagaSetup";
import { fetchAgentListing } from './store/actions/agentManagement/agentManagementActions';

sagaMiddleware.run(rootSaga);

store.dispatch(fetchAgentListing())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
