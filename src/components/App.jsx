import React from 'react';
import Header from './Header';
import Home from './Home';
import { Route, Switch, fromRouter} from 'react-router-dom';

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
        <Route exact path='/' component={Home}/>
      </div>
    );
  }
}

export default App;
