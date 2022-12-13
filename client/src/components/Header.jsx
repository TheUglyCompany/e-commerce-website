import React from 'react';
import {
  HeaderDiv,
  Title,
  Cart,
  DarkButton,
} from './Header.style';

function Header({ dark, setDark }) {
  const onDark = () => {
    setDark(!dark);
  };

  return (
    <HeaderDiv>
      <div>
        <Title>
          <div>
            sillylittlesite.com
          </div>
          <span>
            {dark
              ? <DarkButton dark={dark} onClick={onDark}>Light Mode</DarkButton>
              : <DarkButton dark={dark} onClick={onDark}>Dark Mode</DarkButton>}
          </span>
          <Cart>
            <img src={dark ? 'https://i.imgur.com/36BcuVx.png' : 'https://i.imgur.com/REiDGQT.png'} width="175px" alt="" />
          </Cart>
        </Title>
      </div>
    </HeaderDiv>
  );
}

export default Header;
