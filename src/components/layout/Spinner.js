import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block', position: 'relative', top: '80px' }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;
