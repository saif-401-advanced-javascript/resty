import React from 'react';
import List from './list';

function History({ req, handler }) {
  if (req.length) {
    return (
      <div className='method'>
        <List data={req} handler={handler} />
      </div>
    );
  } else {
    return <div className='method'></div>;
  }
}

export default History;
