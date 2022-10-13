import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const createDiv = document.createElement("div")
createDiv.id = 'hashnut'
document.body.appendChild(createDiv);

ReactDOM.createRoot(document.getElementById('hashnut') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
