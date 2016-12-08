import React from 'react'
// import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from './config/routes.js'

const App = (props) => {
  return(
    <MuiThemeProvider>
      {routes}
    </MuiThemeProvider>
  )
}

export default App