import React from 'react';
import ReactJson from 'react-json-view';

function Results({ header, result, error }) {
  if (header) {
    return (
      <>
        <div className='user-choice'>
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
      <div className='user-choice'>
        <h2 data-testid='error'>{error}</h2>
      </div>
    );
  } else {
    return <div className='user-choice'></div>;
  }
}

export default Results;
