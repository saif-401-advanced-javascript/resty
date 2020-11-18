import React from 'react';
import List from './list';

function History({ req, handler }) {
  if (req.length) {
    return (
      <div id='method'>
        <List data={req} handler={handler} />
      </div>
    );
  } else {
    return <div id='method'></div>;
  }
}

export default History;
