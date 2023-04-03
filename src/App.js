import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
//import { Redirect, Router, Switch } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Switch>
        <Router to="/" component={Home} />
        <Router to="/products" component={Product} />
        <Router to="/about" component={About} />
        <Router to="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect path="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
