import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from "./redux/store"

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

// Theme (pick one)
import 'primereact/resources/themes/lara-light-cyan/theme.css';

// Core CSS
import 'primereact/resources/primereact.min.css';

// Icons
import 'primeicons/primeicons.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider value={{ ripple: true }}>
      <Provider store={store}>
        <App />
      </Provider>
    </PrimeReactProvider>
  </StrictMode>,
)
