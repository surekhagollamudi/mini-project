import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import PopularMovies from './components/PopularMovies'
import MovieItemDetails from './components/MovieItemDetails'
import Account from './components/Account'
import Search from './components/Search'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={PopularMovies} />
    <ProtectedRoute exact path="/movies/:id" component={MovieItemDetails} />
    <ProtectedRoute exact path="/search" component={Search} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/random-path" component={NotFound} />
    <Route component={NotFound} />
  </Switch>
)

export default App
