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
            shop name here.
          </div>
          <span>
            {dark
              ? <DarkButton onClick={onDark}>Light Mode</DarkButton>
              : <DarkButton onClick={onDark}>Dark Mode</DarkButton>}
          </span>
          <Cart>
            <img src="https://i.imgur.com/2ATWGe4.png" width="175px" alt="" />
          </Cart>
        </Title>
      </div>
    </HeaderDiv>
  );
}

export default Header;
