import React from 'react';

export default function ListItem(props) {
  console.log('inside the list item', props);
  return (
    <li>
      <p>WOW</p>
      {/* <span>{method}</span> <span>{url}</span> */}
    </li>
  );
}
