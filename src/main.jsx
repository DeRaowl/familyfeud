import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GameContextProvider } from './context/GameContext'
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GameContextProvider>
       <BrowserRouter>
         <App />
      </BrowserRouter>
    </GameContextProvider>
)
