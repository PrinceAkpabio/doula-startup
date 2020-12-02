import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';
import Footer from './components/footer/footer';
import {NavBar} from './components/nav-bar/Nav';
import Home from './pages/home/home';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';
import Services from './pages/services/services';
// import Services from './pages/services/services';



function App() {

  const Layout = props => {
    const {
      component: Component,
      route
    } = props;

    return (
      <> 
        <NavBar />
        <Component route={route} />
        <Footer />
      </>
    )
  }

  const layoutRender = component => route => <Layout component={component} route={route} />

  return (
    <div className="App">
      <Switch>
      <Route exact  path='/' render={layoutRender(Home)}  />
      <Route exact path='/about' render={layoutRender(AboutPage)} />
      <Route exact path='/contact' render={layoutRender(ContactPage)} />
        <Route exact path='/services' render={layoutRender(Services)} />
      </Switch>
    </div>

  );
};

export default App;
