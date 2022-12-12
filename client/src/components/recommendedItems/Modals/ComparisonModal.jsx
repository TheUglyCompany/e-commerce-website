/* eslint-disable react/button-has-type */
import React from 'react';

function ComparisonModal({closeModal}) {
  return (
    <div>
      <button onClick={closeModal}>X</button>
      <h5>This is a placeholder for the comparison modal</h5>
    </div>
  );
};

export default ComparisonModal;
