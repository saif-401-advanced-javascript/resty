import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import RESULTS from './Results';
import History from './history';
import { If, Then, Else } from './if';
import { Route, Router, Switch } from 'react-router-dom';
import Help from './help';
import HistoryPage from './history-page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      header: '',
      error: '',
      requests: [],
      isClicked: false
    };
  }

  componentDidMount() {
    localStorage.clear();
    let localStorageArr = [];
    localStorage.setItem('requests', JSON.stringify(localStorageArr));
  }

  updateState = (results) => {
    console.log('inside App', results);
    if (results.data || results.header) {
      this.setState({
        result: results.data,
        header: results.header
      });
    } else {
      this.setState({
        error: results.error
      });
    }
  };

  handleReq = (data) => {
    this.setState({
      requests: data
    });
  };

  handleClicked = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    const { result, header, error, requests, isClicked } = this.state;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Form
              handler={this.updateState}
              handleReq={this.handleReq}
              isClicked={this.handleClicked}
            />
            <div className='user-choice row'>
              <History handler={this.updateState} req={requests} />
              <If condition={result}>
                <Then>
                  <RESULTS header={header} result={result} error={error} />
                </Then>
                <Else>
                  <If condition={isClicked}>
                    <Then>
                      <h2>Loading</h2>
                    </Then>
                  </If>
                </Else>
              </If>
            </div>
          </Route>
          <Route path='/history' component={HistoryPage} />
          <Route path='/help' component={Help} />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default App;
