import React from 'react';
import ReactJson from 'react-json-view';
import List from './list';

function Results({ result, header, error, method, url }) {
  if (header) {
    return (
      <>
        {/* <div id='method' className='row'>
            <p>{method}</p>
            <p>{url}</p>
          </div> */}
        <div className='render'>
          <div>
            <h2 data-testid='header'>Headers</h2>
            <ReactJson src={{ Headers: header }} theme='monokai' />
          </div>
          <div>
            <h2 data-testid='result'>Results</h2>
            <ReactJson src={{ Response: result }} theme='monokai' />
          </div>
        </div>
      </>
    );
  } else if (error) {
    return (
      <div className='render'>
        <h2 data-testid='error'>{error}</h2>
      </div>
    );
  } else {
    return <div className='render'></div>;
  }
}

export default Results;
