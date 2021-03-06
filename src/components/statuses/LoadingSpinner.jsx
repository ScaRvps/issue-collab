import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-wrapper">
      <PulseLoader color="black" />
    </div>
  );
};

export default LoadingSpinner;
