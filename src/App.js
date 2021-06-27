import './App.css';
import Navbar from './components/Navbar.js';
import CountriesList from './components/CountriesList';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CountryDetail from './components/CountryDetail.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="row">
          <CountriesList />
          <div className="col-8">
            <Switch>
              <Route exact path="/:cca3" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;