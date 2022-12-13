import React from 'react';
import {
  HeaderDiv,
  HeaderContentDiv,
  ButtonHeader,
  SiteName,
  Cart,
  DarkButton,
} from './Header.style';

function Header({ dark, setDark }) {
  const onDark = () => {
    setDark(!dark);
  };

  return (
    <HeaderDiv dark={dark}>
      <HeaderContentDiv>
        <ButtonHeader>
          {dark
            ? <DarkButton dark={dark} onClick={onDark}>Light Mode</DarkButton>
            : <DarkButton dark={dark} onClick={onDark}>Dark Mode</DarkButton>}
        </ButtonHeader>
        <SiteName>
          ugly.
        </SiteName>
        <Cart>
          <img src={dark ? 'https://i.imgur.com/36BcuVx.png' : 'https://i.imgur.com/REiDGQT.png'} width="175px" alt="" />
        </Cart>
      </HeaderContentDiv>
    </HeaderDiv>
  );
}

export default Header;
