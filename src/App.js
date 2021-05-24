import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Artists from './Components/artists'
import ArtistDetails from './Components/artistDetails'
import Error from './Components/error'

const App = () => {
  return (
    <BrowserRouter>
      <div className = "container">
        <Switch>
          <Route path="/artists/:id" component={ArtistDetails} />
          <Route path="/artists" component={Artists} />
          <Route exact path="/" component={Artists} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;