import React from 'react';
import '../scss/form.scss';

function Form(props) {
  const { handler, handleReq } = props;
  let headers = '';
  let id = 1;
  let localStorageArr = [];
  let getArray;
  localStorage.setItem('requests', JSON.stringify(localStorageArr));
  const crud_choice = document.getElementById('crud_choice');
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.children[0].value;
    if (url) {
      fetch(url).then((row) => {
        headers = row.headers.get('Content-Type');
        row.json().then((data) => {
          btnColor();
          getArray = JSON.parse(localStorage.getItem('requests'));
          console.log('trertert', getArray);
          getArray.push({
            url: url,
            method: 'GET',
            header: headers,
            body: data
          });
          localStorage.setItem('requests', JSON.stringify(getArray));
          getArray = JSON.parse(localStorage.getItem('requests'));
          console.log('trertert', getArray);
          handler({
            header: headers,
            data: data
          });
          handleReq({
            req: JSON.parse(localStorage.getItem('requests'))
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
    const inputEle = document.querySelector('#url');
    const btn = e.target.innerText;
    const buttonsArray = document.querySelectorAll('button');
    [...buttonsArray].forEach((item) => {
      if (item.classList.contains('choiceBtn')) {
        item.classList.remove('choiceBtn');
      }

      if (item.innerText === e.target.innerText) {
        item.classList.add('choiceBtn');
      }
    });
    if (btn === 'POST') {
      handlePost(inputEle.value);
    } else if (btn === 'UPDATE') {
      handleUpdate(inputEle.value);
    } else {
      handleDelete(inputEle.value);
    }
  };

  const handlePost = (url) => {
    if (url) {
      const [title, body] = crud_choice.value.split(',');
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: id
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).then((response) => {
        headers = response.headers.get('Content-Type');
        response.json().then((json) => {
          getArray = JSON.parse(localStorage.getItem('requests'));
          getArray.push({
            url: url,
            method: 'POST',
            header: headers,
            body: json
          });
          localStorage.setItem('requests', JSON.stringify(getArray));
        });
      });
    }
    id++;
  };
  const handleDelete = (url) => {
    if (url) {
      const arr = url.split('/');
      const id = arr[arr.length - 1];
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).then((response) => {
        headers = response.headers.get('Content-Type');
        response.json().then((json) => {
          getArray = JSON.parse(localStorage.getItem('requests'));
          getArray.push({
            url: url,
            method: 'DELETE',
            header: headers,
            body: {
              title: getArray[id - 1].body.title,
              body: getArray[id - 1].body.body,
              userId: id
            }
          });
          localStorage.setItem('requests', JSON.stringify(getArray));
        });
      });
    }
  };

  const handleUpdate = (url) => {
    if (url) {
      const arr = url.split('/');
      const id = arr[arr.length - 1];
      const [title, body] = crud_choice.value.split(',');
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          body: body
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).then((response) => {
        headers = response.headers.get('Content-Type');
        response.json().then((json) => {
          getArray = JSON.parse(localStorage.getItem('requests'));
          getArray.push({
            url: url,
            method: 'PUT',
            body: {
              title: title,
              body: body,
              userId: id
            }
          });
          localStorage.setItem('requests', JSON.stringify(getArray));
        });
      });
    }
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
      <form data-testid='form' className='row' onSubmit={handleSubmit}>
        <input id='url' data-testid='input-text' type='text' />
        <input type='submit' value='GO!' />
      </form>
      <div id='CRUD'>
        <div id='user-choices'>
          <button id='first' onClick={handleMethod}>
            GET
          </button>
          <button onClick={handleMethod}>POST</button>
          <button onClick={handleMethod}>DELETE</button>
          <button onClick={handleMethod}>UPDATE</button>
        </div>
        <textarea
          id='crud_choice'
          placeholder='Enter your data here divided by , post (title,body) Update(title,body) delete()'
        ></textarea>
      </div>
    </>
  );
}

export default Form;
