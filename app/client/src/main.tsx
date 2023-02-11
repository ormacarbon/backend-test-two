import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
