import React from 'react';
import '../scss/form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // Rule : We can't directly change the state
    this.state = { method: '', url: '' };
  }

  handleUrl = () => {
    const inputEle = document.querySelector('input[type="text"]');
    const getBtn = document.querySelector('#first');
    const selectedBtn = document.querySelector('button.choiceBtn');
    if (selectedBtn) {
      selectedBtn.classList.remove('choiceBtn');
    }
    getBtn.classList.add('choiceBtn');
    this.setState({
      method: 'GET',
      url: inputEle.value
    });
  };
  handleMethod = (e) => {
    this.setState({
      method: e.target.innerText
    });
    const buttonsArray = document.querySelectorAll('button');
    [...buttonsArray].forEach((item) => {
      if (item.classList.contains('choiceBtn')) {
        item.classList.remove('choiceBtn');
      }

      if (item.innerText === e.target.innerText) {
        item.classList.add('choiceBtn');
      }
    });
  };

  render() {
    return (
      <>
        <div className='form row'>
          <p>URL:</p>
          <input type='text'></input>
          <button onClick={this.handleUrl}>GO!</button>
        </div>
        <div id='user-choices'>
          <button id='first' onClick={this.handleMethod}>
            GET
          </button>
          <button onClick={this.handleMethod}>POST</button>
          <button onClick={this.handleMethod}>DELETE</button>
          <button onClick={this.handleMethod}>UPDATE</button>
        </div>
        <div className='user-choice'>
          <div className='choice row'>
            <p id='url'>{this.state.method}</p>
            <p id='method'>{this.state.url}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
