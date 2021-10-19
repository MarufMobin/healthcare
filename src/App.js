import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './Pages/About/About/About';
import Services from './Pages/Services/Services/Services';
import Contact from './Pages/Contact/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about/:aboutId">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
           
            
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
