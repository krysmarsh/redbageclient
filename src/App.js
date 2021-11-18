
import React, { Component } from 'react';
import SiteBar from './components/home/NavBar';
import Auth from './auth/Auth';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import HomeIndex from './components/home/HomeIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/home/Footer";
import './App.css';
import Profile from "./components/home/Profile";
import MusicIndex from "./components/music/MusicIndex";
import AboutUs from "./components/home/AboutUs";
import ContactUs from "./components/home/ContactUs";
import HeroSection from './components/home/HeroSection'
//import MusicUser from "./components/music/MusicUser";
import AppContainer from "./components/common/AppContainer";
//import MusicCategory from './components/music/MusicCategory'
import globalTheme from "./assets/styles/globalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import mediapic1 from "./assets/images/mediapic1.jpg";

class App extends Component {

constructor (props) {
    super(props);
    this.setToken = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token});
}
    this.state = {
      sessionToken: '',
      setToken: this.setToken
      
    }
}

componentDidlMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
      console.log(token)
    }
}

setSessionState = (token) => {
  localStorage.setItem('token', token);
  this.setState({ sessionToken: token});
}

logout = () => {
  this.setState ({
    sessionToken: '',
  });
  localStorage.clear();
}

protectedViews = () => {
  if (this.state.sessionToken === localStorage.getItem('token')) {
    console.log(this.state.sessionToken)
    return (  
      <Switch>
        <Route path='/' exact>
          <MusicIndex token={this.state.sessionToken} />
        </Route>
        
      </Switch>
    )
  } else {
      return (
        <Route path="/">
          <Auth setToken={this.setSessionState} />
          
        </Route>
       
      )
  }
}
  render() {
    return (
      
      <ThemeProvider theme={globalTheme}>
      <Router>
      <div style={{ backgroundImage: `url(${mediapic1})`}}>
  <AppContainer>
  <HeroSection />
        <SiteBar clickLogout={this.logout} />
          {this.protectedViews()}
         {/* <Auth /> */}

          {/* <Route exact path="/">
            {this.state.sessionToken ? <MusicIndex /> : <HomeIndex />} 
          </Route> */}
 {/* <Route exact path="/users/:username">
                <MusicUser />
                </Route>  */}

          <Route exact path="/profile">
            <Profile />
            </Route>
            {/* <Route exact path="/category/:cat"
            render={(props) => (
              <MusicCategory key={props.match.params.cat} />
            )}
            /> */}
            <Route exact path="/aboutus">
              <AboutUs />
              </Route>

              <Route exact path="/contactus">
                <ContactUs />
              </Route>
           
            {/* <Route>
              <Redirect to="/" />
            </Route> */}
         </AppContainer>
      </div>
      
          <Footer />
         
        </Router>
        
    </ThemeProvider>
    );
  }
}

export default App;