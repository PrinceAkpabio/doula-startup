import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';
import Footer from './components/footer/footer';
import {NavBar} from './components/nav-bar/Nav';
import Home from './pages/home/home';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';
import Services from './pages/services/services';
import { ClampBuilder } from "./styles/config";
import { Query } from 'react-apollo';
import PAGE_QUERY from './components/customHooks/page_query';
import Loading from './pages/onFetch/loadingPage';
import ErrorPage from './pages/onFetch/ErrorPage';




function App() {

  const Layout = props => {
    const {
      component: Component,
      route
    } = props;

    return (
      <Query query={PAGE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <ErrorPage />
          const pagedata = data;
          const footerdata = data.footerComponents;

          return (
            <> 
              <NavBar />
              <Component data={pagedata} route={route} />
              <Footer content={footerdata}/>
            </>
          )
       }}

      </Query>
    )
  }

  const layoutRender = component => route => <Layout component={component} route={route}  />

  return (
    <div className="App"
     style={{
                '--clamph0': ClampBuilder('320', '840', '2', '2.5'),
                '--clamph1': ClampBuilder('320', '840', '2', '3'),
                '--clamph2': ClampBuilder('320', '840', '1.4', '2.8'),
                '--clamph3': ClampBuilder('320', '840', '1.2', '2.3'),
                '--clamph4': ClampBuilder('320', '840', '1', '2'),
                '--clampP': ClampBuilder('320', '840', '0.94', '1.5')
   }}
    >
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
