import React, { Fragment } from 'react';

import './styles/App.css';

// import { TabBar } from 'antd-mobile';
import MyLayout from "./components/MyLayout";
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Mine from './pages/Mine';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }


  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" exact render={(props) => <MyLayout {...props}> <Home /></MyLayout>} />
          <Route path="/Cart" render={(props) => <MyLayout {...props}> <Cart /></MyLayout>} />
          <Route path="/Mine" render={(props)=> <MyLayout {...props}> <Mine /></MyLayout>} />
        </Router>  
      </Fragment>
    );
  }
}


export default App;

