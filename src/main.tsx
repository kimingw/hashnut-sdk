import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { projectName } from './config'
import check from './helper/check'

window[projectName] = {
  init: (configuration: InitProps) => {
    check.init(configuration)

    // init结束才注入react
    const createDiv = document.createElement("div")
    createDiv.id = projectName
    document.body.appendChild(createDiv);

    ReactDOM.createRoot(document.getElementById(projectName) as HTMLElement).render(
      <React.StrictMode>
        <App {...configuration} />
      </React.StrictMode>
    )
  }
}

