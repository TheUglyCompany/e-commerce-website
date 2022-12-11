import React, { useState } from 'react';
import {
  FitChart,
  FitChartContent,
  AttributeStyle,
  DataStyle,
  ArrowDown,
} from './ProductBreakdown.style';

function ProductBreakdown({ metaData }) {
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
  }

  // make an array of names
  // make an equal array length of Values
  // map through them
  // attribute name
  // percentage of attribute value passed as width
  return (
    <FitChart data-testid="test">
      {
        attributes.map((attribute, i) => {
          const percentage = ((attribute[1].value / 5) * 75);
          return (
            <FitChartContent key={i}>
              <DataStyle>
                {attribute[0]}
              </DataStyle>
              <ArrowDown inputWidth={`${percentage + 25}%`} />
              <AttributeStyle />
            </FitChartContent>
          );
        })
      }

    </FitChart>
  );
}

export default ProductBreakdown;
