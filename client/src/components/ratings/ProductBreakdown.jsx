import React from 'react';
import {
  FitChart,
  FitChartContent,
  AttributeStyle,
  DataStyle,
  ArrowDown,
  FitChartDescriptions,
} from './Styles/ProductBreakdown.style';

function ProductBreakdown({ metaData, dark }) {
  const attributes = metaData.characteristics ? Object.entries(metaData.characteristics) : [];
  const charDescriptions = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long'],
  };

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
                <ArrowDown dark={dark} inputWidth={`${percentage + 25}%`} />
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
