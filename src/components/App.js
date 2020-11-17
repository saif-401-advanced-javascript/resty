import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import RESULTS from './Results';
import History from './history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      header: '',
      error: '',
      requests: []
    };
  }

  updateState = (results) => {
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

  render() {
    const { result, header, error, requests } = this.state;
    return (
      <>
        <Header />
        <Form handler={this.updateState} handleReq={this.handleReq} />
        <div className='user-choice row'>
          <History req={requests} />
          <RESULTS header={header} result={result} error={error} />
        </div>
        <Footer />
      </>
    );
  }
}
export default App;
