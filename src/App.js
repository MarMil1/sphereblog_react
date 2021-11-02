import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
// import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Help from './components/Help/Help';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Write from './components/Write/Write';
// import Footer from './components/Footer/Footer';
import { useContext } from "react";
import { Context } from "./context/Context";
import SingleArticleComponent from './components/SingleArticleComponent/SingleArticleComponent';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Redirect exact from='/' to="/home" />
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/help"><Help /></Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/signup">{user ? <Home /> : <Signup />}</Route>
          <Route path="/article/:articleId">
            <SingleArticleComponent />
          </Route>
        </Switch>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
