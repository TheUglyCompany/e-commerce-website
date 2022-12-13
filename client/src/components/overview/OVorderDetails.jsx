import React from 'react';
import OVquantity from './OVquantity';
import {
  Dd,
  DdBttn,
  DdContent,
  DdItem,
} from './Overview.style';

function OVorderDetails({
  skuOptions,
  currentSku,
  setCurrentSku,
  bttnSizeActive,
  setBttnSizeActive,
  bttnSize,
  setBttnSize,
  bttnQntyActive,
  setBttnQntyActive,
  bttnQnty,
  setBttnQnty,
  dark,
}) {
  return (
    <div>
      <Dd>
        <DdBttn onClick={() => { setBttnSizeActive(!bttnSizeActive); }}>
          {bttnSize}
          &nbsp;&nbsp;
          <span>
            <img src={dark ? 'https://i.imgur.com/fPN5x5Y.png' : 'https://i.imgur.com/qNLEmCH.png'} width="10px" alt="" />
          </span>
        </DdBttn>
        {bttnSizeActive && (
          <DdContent dark={dark}>
            {skuOptions.map((skuOption) => (
              <DdItem onClick={(e) => {
                setBttnSize(e.target.textContent);
                setBttnSizeActive(false);
                setCurrentSku(skuOption);
              }}
              >
                {skuOption.size}
              </DdItem>
            ))}
          </DdContent>
        )}
      </Dd>

      {currentSku && (
        <OVquantity
          currentSku={currentSku}
          bttnQntyActive={bttnQntyActive}
          setBttnQntyActive={setBttnQntyActive}
          bttnQnty={bttnQnty}
          setBttnQnty={setBttnQnty}
          dark={dark}
        />
      )}
    </div>
  );
}

export default OVorderDetails;
