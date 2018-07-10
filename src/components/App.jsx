import React from 'react';
import Header from './Header';
import Home from './Home';
import UserPage from './UserPage';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: {}
    };
  }

  render() {
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/user' component={UserPage}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

export default withRouter(connect(mapStateToProps)(App));
