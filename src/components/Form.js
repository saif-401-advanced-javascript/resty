import React from 'react';
import '../scss/form.scss';

function Form(props) {
  const { handler } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.children[0].value;
    fetch(url)
      .then((row) => row.json())
      .then((data) => {
        handler(data);
      });
    const getBtn = document.querySelector('#first');
    const selectedBtn = document.querySelector('button.choiceBtn');
    if (selectedBtn) {
      selectedBtn.classList.remove('choiceBtn');
    }
    getBtn.classList.add('choiceBtn');
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
      <div className='user-choice'></div>
    </>
  );
}

export default Form;
