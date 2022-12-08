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
          <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" width="10px" alt="" />
        </span>
      </DdBttn>
      {bttnQntyActive && (
        <DdContent>
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
