import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './features/store/store.jsx'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
// import 'emoji-mart/css/emoji-mart.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider store={store}>
      <App/>
    </Provider>
  </HelmetProvider>
)
