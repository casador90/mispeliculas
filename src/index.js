import '@fortawesome/fontawesome-free/css/all.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {Provider} from 'react-redux'
import App from './componentes/App';
import reducers from './redux/reducers'
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './componentes/GlobalStyle'
import './componentes/style.css'



const store = createStore(reducers,{},applyMiddleware(promise,reduxThunk, logger))

ReactDOM.render(
   <React.StrictMode>
     <Provider store={store}>
     <App />

     </Provider>
   
   <GlobalStyle/>
  </React.StrictMode>,
 
  document.getElementById('root')
);

serviceWorker.unregister();
