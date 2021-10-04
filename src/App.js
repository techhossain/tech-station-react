import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
