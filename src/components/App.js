import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import RESULTS from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      header: '',
      error: ''
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

  render() {
    const { result, header, error } = this.state;
    return (
      <>
        <Header />
        <Form handler={this.updateState} />
        <RESULTS header={header} result={result} error={error} />
        <Footer />
      </>
    );
  }
}
export default App;
