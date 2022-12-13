import React from 'react';
import OVstyleImg from './OVstyleImg';
import {
  Styles,
  StyleHeader,
  StyleSelected,
} from './Overview.style';

function OVstyles({
  styleSelected, styleOpts, setSkuOptions, setStyleSelected, dark,
}) {
  return (
    <Styles>
      <StyleHeader>
        STYLE:&nbsp;
        <StyleSelected>
          {styleSelected && (
            <span>
              {styleSelected.name?.toUpperCase()}
            </span>
          )}
        </StyleSelected>
      </StyleHeader>
      <div>
        {styleOpts.map((styleOpt, index) => (
          <OVstyleImg
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            styleOpts={styleOpts}
            styleOpt={styleOpt}
            index={index}
            setSkuOptions={setSkuOptions}
            styleSelected={styleSelected}
            setStyleSelected={setStyleSelected}
            dark={dark}
          />
        ))}
      </div>
    </Styles>
  );
}

export default OVstyles;
