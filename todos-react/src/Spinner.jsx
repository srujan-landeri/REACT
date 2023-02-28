import React from 'react';
import spinner from './spinner.svg';
export default function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} className="loader" alt="loading" />
    </div>
  );
}
