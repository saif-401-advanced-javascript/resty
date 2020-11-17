import React from 'react';

export default function ListItem({ request }) {
  console.log('inside the list item', request);
  return (
    <li>
      <span>{request.method}</span> <span>{request.url}</span>
    </li>
  );
}
