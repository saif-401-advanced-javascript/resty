import React from 'react';
import ListItem from './list-item';

function List({ data, handler }) {
  if (data.length) {
    return (
      <ul>
        {data.map((req, index) => {
          return (
            <ListItem
              key={index}
              request={req}
              index={index}
              handler={handler}
            />
          );
        })}
      </ul>
    );
  } else {
    return <div></div>;
  }
}

export default List;
