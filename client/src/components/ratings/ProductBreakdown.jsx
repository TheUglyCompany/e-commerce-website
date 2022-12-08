import React, { useState } from 'react';
import {
  FitChart,
} from './ProductBreakdown.style';

function ProductBreakdown({ metaData }) {
  console.log(metaData);
  let totalAttributeValues = 0;
  let allVal = [];
  let attributeNames = [];
  let attributes = [];
  /*
        1. Size
        2. Width
        3. Comfort
        4. Quality
        5. Length
        6. Fit
  */

  if (metaData.characteristics) {
    attributes = (Object.entries(metaData.characteristics));// an array of arrays
    // console.log('nameVals', attributes);// array[0][]
  }

  // make an array of names
  // make an equal array length of Values
  // map through them
    // attribute name
    // percentage of attribute value passed as width
  return (
    <FitChart data-testid="test">
      PRODUCT BREAKDOWN
      {
        attributes.map((attribute) => {
          // console.log(attribute);
          return (
            <div>
              {attribute[0]}
              {' '}
              {attribute[1].value}
            </div>
          );
        })
      }

    </FitChart>
  );
}

export default ProductBreakdown;
