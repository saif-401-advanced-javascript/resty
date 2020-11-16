import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import RESULTS from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      result: [],
      header: ''
    };
  }

  updateState = (results) => {
    this.setState({
      count: results.count,
      result: results.results
    });
  };

  render() {
    const { count, result, header } = this.state;
    return (
      <>
        <Header />
        <Form handler={this.updateState} />
        <RESULTS count={count} results={result} headers={header} />
        <Footer />
      </>
    );
  }
}
export default App;
