import React from 'react';
import OVstyleImg from './OVstyleImg';
import {
  Styles,
  StyleHeader,
  StyleSelected,
} from './Overview.style';

function OVstyles({
  styleSelected, styleOpts, setSkuOptions, setStyleSelected,
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
            styleOpts={styleOpts}
            styleOpt={styleOpt}
            index={index}
            setSkuOptions={setSkuOptions}
            styleSelected={styleSelected}
            setStyleSelected={setStyleSelected}
          />
        ))}
      </div>
    </Styles>
  );
}

export default OVstyles;
