import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Root, {loader as linksLoader} from './routes/Root.jsx'
import Planet, {loader as planetLoader} from './routes/planet.jsx'
import Error from './routes/error.jsx'
import Index from './routes/index.jsx'

import "./app.css"

const ROUTER = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    loader:linksLoader,
    children:[
      {
        errorElement:<Error/>,
        children:[
          {index:true, element:<Index/>},
          {
            path:"planets/:name",
            element:<Planet/>,
            loader:planetLoader,
          },
          {
            path:"planets/:name/:article",
            element:<Planet/>,
            loader:planetLoader,
          },
        ]
      }
    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER}/>
  </React.StrictMode>,
)
