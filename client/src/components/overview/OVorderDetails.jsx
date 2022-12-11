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
}) {
  return (
    <div>
      <Dd>
        <DdBttn onClick={() => { setBttnSizeActive(!bttnSizeActive); }}>
          {bttnSize}
          &nbsp;&nbsp;
          <span>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" width="10px" alt="" />
          </span>
        </DdBttn>
        {bttnSizeActive && (
          <DdContent>
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
        />
      )}
    </div>
  );
}

export default OVorderDetails;
