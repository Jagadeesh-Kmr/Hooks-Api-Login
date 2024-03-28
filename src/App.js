import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import LeadBoard from './components/LeaderBoard'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={LeadBoard} />
  </Switch>
)

export default App
