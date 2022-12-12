import React from 'react';
import {
  FitChart,
  FitChartContent,
  AttributeStyle,
  DataStyle,
  ArrowDown,
  FitChartDescriptions,
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

  const charDescriptions = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long'],
  };

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
            <div key={i}>
              <FitChartContent>
                <DataStyle>
                  {attribute[0]}
                </DataStyle>
                <ArrowDown inputWidth={`${percentage + 25}%`} />
                <AttributeStyle />
              </FitChartContent>
              <FitChartDescriptions>
                <span>
                  {charDescriptions[attribute[0]][0]}
                </span>
                <span>
                  {charDescriptions[attribute[0]][1]}
                </span>
              </FitChartDescriptions>
            </div>
          );
        })
      }

    </FitChart>
  );
}

export default ProductBreakdown;
