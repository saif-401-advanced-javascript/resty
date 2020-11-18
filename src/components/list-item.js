import React from 'react';

export default function ListItem({ request, index, handler }) {
  return (
    <li id={index} onClick={getData}>
      {request.method} {request.url}
    </li>
  );
  function getData(e) {
    if (e.target.id) {
      let id = e.target.id;
      let array = JSON.parse(localStorage.getItem('requests'));
      handler({
        data: array[id].body,
        header: array[id].header
      });
    }
  }
}
