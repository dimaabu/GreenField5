import React from 'react';
import Navbar from './components/Homepage/Navbar';
import Footer from './components/Homepage/Footer';
import Home from './components/Homepage/Home'
import Profile from './components/user/Profile';
<<<<<<< HEAD
import Authpage from './components/payment/payment'
=======


>>>>>>> ecdf53b99c59981514632c8108e76a432b872949
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Trips from './components/Homepage/Cards'
import Login from './components/user/login'
import Trip from './components/trips/trips'
import Signup from './components/user/signup'
// import Payment from './components/payment/payment'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin: true,
    }
    this.changeLogInStatus = this.changeLogInStatus.bind(this)

  }
  changeLogInStatus() {
    this.setState({
      islogin: !this.state.islogin
    })
    document.documentElement.scrollTop = 0;

  }

  render() {
    const { islogin } = this.state
    if (islogin) {
      return (
        <>
          <Router>
            <Navbar />
            <Switch>
              <Route
                path='/sign-up'
                render={(props) => <Signup toggleLogin={this.changeLogInStatus} />}
              />

              <Route path="/" exact component={Home} />
              <Route path="/trips" exact component={Trips} />
              {/* <Route path="/sign-up" exact component={Signup} /> */}
              <Route path="/user" exact component={Profile} />
              <Route path="/trip" exact component={Trip} />

            </Switch>
            <Footer />
          </Router>
        </>


<<<<<<< HEAD
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trips" exact component={Authpage} />
          <Route path="/sign-up" exact component={Login} />
          <Route path="/user" exact component={Profile} />

        </Switch>
        <Footer />
      </Router>
    </>
=======
      )
    }
    else {
      return (
        <>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/trips" exact component={Trip} />
              <Route
                path='/sign-up'
                render={(props) => <Login toggleLogin={this.changeLogInStatus} />}
              />
              <Route path="/user" exact component={Profile} />
              <Route path="/trip" exact component={Trip} />
>>>>>>> ecdf53b99c59981514632c8108e76a432b872949

            </Switch>
            <Footer />
          </Router>
        </>
      )
    }
  }
}


export default App;
