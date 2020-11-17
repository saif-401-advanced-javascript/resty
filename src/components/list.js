import React from 'react';
import ListItem from './list-item';

function List({ data }) {
  console.log(data.req);
  if (data.req.length) {
    console.log('here');
    if (data.req.req.length > 0) {
      console.log('here');
      return (
        <ul>
          {data.req.req.map((req) => {
            return <ListItem request={req} />;
          })}
        </ul>
      );
    } else {
      return <></>;
    }
  } else {
    return <div></div>;
  }
}

export default List;
