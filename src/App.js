import './styles/App.css';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router';
import WatchList from './components/WatchList';
import Porfolio from './components/Porfolio';
import Home from './components/Home';
import StockDetails from './components/StockDetails';
import Contact from './components/Contact';
import AddFormWatchList from './components/auxComponents/AddFormWatchList';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props}/>}/>
      <Route exact path='/WatchList' render={(props) => <WatchList {...props}/>}/>
      <Route exact path='/Porfolio' render={(props) => <Porfolio {...props}/>}/>
      <Route exact path='/StockDetails' render={(props) => <StockDetails {...props}/>}/>
      <Route exact path='/Contact' render={(props) => <Contact {...props}/>}/>
      <Route exact path='/Search-WatchList' render={(props) => <AddFormWatchList {...props}/>}/>
    </Switch>
      
    </div>
  );
}

export default App;
