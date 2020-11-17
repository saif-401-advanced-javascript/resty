import React from 'react';
import List from './list';

function History(props) {
  return (
    <div id='method'>
      <List data={props} />
    </div>
  );
}

export default History;
