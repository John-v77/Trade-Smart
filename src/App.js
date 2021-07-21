import './styles/App.css';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router';
import WatchList from './components/WatchList';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import StockDetails from './components/StockDetails';
import Contact from './components/Contact';
import AddFormWatchList from './components/auxComponents/AddFormWatchList';
import { ContextProvider} from './components/auxComponents/StockContext';
import Footer from './components/auxComponents/Footer';


function App() {
  return (
    <ContextProvider>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props}/>}/>
        <Route exact path='/WatchList' render={(props) => <WatchList {...props}/>}/>
        <Route exact path='/Portfolio' render={(props) => <Portfolio {...props}/>}/>
        <Route exact path='/StockDetails' render={(props) => <StockDetails {...props}/>}/>
        <Route exact path='/Contact' render={(props) => <Contact {...props}/>}/>
        <Route exact path='/Search-WatchList' render={(props) => <AddFormWatchList {...props}/>}/>
      </Switch>
      <Footer/>
      </div>

    </ContextProvider> 
  
  );
}

export default App;
