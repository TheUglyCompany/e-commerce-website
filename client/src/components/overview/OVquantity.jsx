import React from 'react';
import {
  Dd,
  DdBttn,
  DdContent,
  DdItem,
} from './Overview.style';

function OVquantity({
  currentSku,
  bttnQntyActive,
  setBttnQntyActive,
  bttnQnty,
  setBttnQnty,
  dark,
}) {
  const changeQntyArr = (num) => {
    const result = [];

    if (num > 15) {
      // eslint-disable-next-line no-param-reassign
      num = 15;
    }

    if (num <= 0 || num === null) {
      return ['OUT OF STOCK'];
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < num; i++) {
      result.push(i + 1);
    }

    return result;
  };

  const qntyArr = changeQntyArr(currentSku.quantity);

  return (
    <Dd>
      <DdBttn onClick={() => { setBttnQntyActive(!bttnQntyActive); }}>
        {bttnQnty}
        &nbsp;&nbsp;
        <span>
          <img src={dark ? 'https://i.imgur.com/fPN5x5Y.png' : 'https://i.imgur.com/qNLEmCH.png'} width="10px" alt="" />
        </span>
      </DdBttn>
      {bttnQntyActive && (
        <DdContent dark={dark}>
          {qntyArr.map((qntyNum) => (
            <DdItem onClick={(e) => {
              setBttnQnty(e.target.textContent);
              setBttnQntyActive(false);
            }}
            >
              {qntyNum}
            </DdItem>
          ))}
        </DdContent>
      )}
    </Dd>
  );
}

export default OVquantity;
