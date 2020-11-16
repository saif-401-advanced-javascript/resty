import React from 'react';
import '../scss/form.scss';

function Form(props) {
  const { handler } = props;
  let headers = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.children[0].value;
    if (url) {
      fetch(url).then((row) => {
        headers = row.headers.get('Content-Type');
        row.json().then((data) => {
          btnColor();
          handler({
            header: headers,
            data: data
          });
        });
      });
    } else {
      handler({
        error: 'Please Enter a URL'
      });
    }
  };

  const handleMethod = (e) => {
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

  const btnColor = () => {
    const getBtn = document.querySelector('#first');
    const selectedBtn = document.querySelector('button.choiceBtn');
    if (selectedBtn) {
      selectedBtn.classList.remove('choiceBtn');
    }
    getBtn.classList.add('choiceBtn');
  };

  return (
    <>
      <form className='row' onSubmit={handleSubmit}>
        <input type='text' />
        <input type='submit' value='GO!' />
      </form>
      <div id='user-choices'>
        <button id='first' onClick={handleMethod}>
          GET
        </button>
        <button onClick={handleMethod}>POST</button>
        <button onClick={handleMethod}>DELETE</button>
        <button onClick={handleMethod}>UPDATE</button>
      </div>
    </>
  );
}

export default Form;
