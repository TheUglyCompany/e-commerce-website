import React from 'react';
import { SocialIcons, Social } from './Overview.style';

function OVsocial({ dark }) {
  return (
    <Social>
      <SocialIcons>
        <img src={dark ? 'https://i.imgur.com/mQLqczM.png' : 'https://i.imgur.com/Oiw9r1x.png'} width="20px" alt="" />
      </SocialIcons>
      <SocialIcons>
        <img src={dark ? 'https://i.imgur.com/ginPGiJ.png' : 'https://i.imgur.com/k16qlbn.png'} width="20px" alt="" />
      </SocialIcons>
      <SocialIcons>
        <img src={dark ? 'https://i.imgur.com/E1d1aQx.png' : 'https://i.imgur.com/LaI56JF.png'} width="20px" alt="" />
      </SocialIcons>
    </Social>
  );
}

export default OVsocial;
