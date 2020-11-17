import React from 'react';
import ListItem from './list-item';

function List({ data }) {
  if (data.req.length > 0) {
    return (
      <ul>
        {data.req.map((req) => {
          return <ListItem key={req.userId} request={req} />;
        })}
      </ul>
    );
  } else {
    return <></>;
  }
}

export default List;
