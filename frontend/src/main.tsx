import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RelayEnviroment from "./relay/environment.ts";
import { RelayEnvironmentProvider } from 'react-relay';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RelayEnvironmentProvider environment={RelayEnviroment}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RelayEnvironmentProvider>
)
