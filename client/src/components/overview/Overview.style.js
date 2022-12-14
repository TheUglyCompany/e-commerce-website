import styled from 'styled-components';

const Ov = styled.div`
  overflow: visible;
  display: flex;
  width: 80%;
  margin: 50px auto;
  font-family: Poppins;
  font-size: 12px;
  font-weight: light;
`;

const Gallery = styled.div`
  float: left;
  display: block;
  width: 65%;
  min-width: 500px;
  padding: 0px;
`;

const OVgalleryThumbs = styled.div`
  margin: 0px auto;
  padding: 2px;
  justify-content: center;
  display: flex;
  cursor: pointer;
  /* background-color: #D3D3D3; */
  /* border: solid; */
  /* overflow: auto; */
`;

const OVgalleryArrowLeft = styled.span`
  display: ${(props) => `${props.display}`};
  align-items: center;
  margin: 0;
  width: 25px;
  height: auto;
  /* border: 1px solid; */
  cursor: pointer;
  /* float: left; */
`;

const OVgalleryArrowRight = styled.span`
  display: ${(props) => `${props.display}`};
  align-items: center;
  margin: 0;
  width: 25px;
  height: auto;
  /* border: 1px solid; */
  cursor: pointer;
  /* float: right; */
`;

const OVgalleryThumb = styled.img`
  margin: 2px;
  height: 50px;
  /* max-width: 100%; */
`;

const OVgalleryThumbSelect = styled.img`
  margin: 2px;
  height: 48px;
  opacity: 0.5;
  border: 1px solid;
  z-index: 1;
  /* max-width: 100%; */
`;

const GalleryContainer = styled.div`
  display: flex;
  /* height: 500px; */
`;

const GalleryBig = styled.span`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 0px auto;
  cursor: pointer;
  width: 550px;
  /* height: 500px; */
  /* line-height:50px; */
`;

const GalleryZoom = styled.div`
  display: ${(props) => `${props.display}`};
  position: absolute;
  overflow: auto;
  top: 50px;
  left: 50px;
  width: 90%;
  height: 90%;
  /* align-items: center; */
  z-index: 2;
  border: 5px solid;
  background-color: ${(props) => (props.dark ? 'white' : 'grey')};
  /* cursor: pointer; */
`;

const GalleryArrowL = styled.div`
  display: ${(props) => `${props.display}`};
  align-items: center;
  overflow: hidden;
  margin: 0;
  width: 25px;
  height: 100%;
  cursor: pointer;
  flex-shrink: 0;
`;

const GalleryArrowR = styled.div`
  display: ${(props) => `${props.display}`};
  align-items: center;
  overflow: hidden;
  margin: 0;
  width: 25px;
  height: 100%;
  /* border: 1px solid; */
  cursor: pointer;
  /* float: right; */
  flex-shrink: 0;
`;

const ImageZoomSpan = styled.div`
  width: 600px;
  align-items: flex-start;
  overflow: auto;
  flex-grow: 1;
  cursor: pointer;
`;

const ImageZoom = styled.img`
  src: ${(props) => `url(${props.src})`};
  /* flex-shrink: 0; */
  width: 100%;
  min-width: 100%;
  /* max-height: 500px; */
`;

const ImageBig = styled.img`
  src: ${(props) => `url(${props.src})`};
  flex-shrink: 0;
  max-width: 500px;
  max-height: 500px;
  cursor: zoom-in;
`;

const Details = styled.div`
  float: right;
  display: block;
  width: 35%;
  /* max-width: 300px; */
  background: transparent;
  padding: 10px;
`;

const OVstars = styled.div`
  display: inline-block;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 200;
  line-height: 1;
  margin: 5px 0px;

  &::before {
    content: '★★★★★';
    letter-spacing: 2px;
    background: linear-gradient(90deg, #14453D var(--rating), #D3D3D3 var(--rating));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const RatingsLink = styled.a`
  color: ${(props) => (props.dark ? 'white' : 'black')};
`;

const OVstarsReview = styled.span`
  font-size: 10px;
  font-family: Poppins;
  font-weight: 200;
  padding: 0px 5px;
  color: #D3D3D3;
`;

const Category = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: light;
  padding: 0px;
  /* color: #3a3a3a; */
`;

const Name = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  padding: 5px 0px 0px 0px;
`;

const Price = styled.div`
  font-family: Poppins;
  font-size: 15px;
  font-weight: light;
  padding: 5px 0px;
  /* color: #3a3a3a; */
`;

const SalePrice = styled.span`
  color: red;
`;

const Desc = styled.div`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 200;
  padding: 5px 0px;
  /* color: #3a3a3a; */
`;

const Styles = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0px 10px 0px;
`;

const StyleImg = styled.img`
  src: ${(props) => `url(${props.src})`};
  border-radius:50%;
  width: 75px;
  height: 75px;
  cursor: pointer;
  position: relative;
`;

const StyleImgPad = styled.span`
  padding: 10px;
  position: relative;
`;

const Check = styled.span`
  position: absolute;
  top: -50px;
  left: 60px;
  display: flex;
  background-color: ${(props) => (props.dark ? '#14453D' : '#6e66ab')};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
`;

const StyleImgThumb = styled.div`
  flex: 1;
  border: 1px solid;
`;

const StyleHeader = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0px 10px 0px;
`;

const StyleSelected = styled.span`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 200;
`;

const Purchase = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0px 0px 0px;
  display: block;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  padding: 5px;
  margin: 10px;
  width: 220px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  height: 40px;
  text-transform: uppercase;
`;

const FavButton = styled.button`
  background: transparent;
  border: 1px solid;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  padding: 5px;
  margin: 10px;
  width: 50px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  height: 40px;
  text-transform: uppercase;
  /* display: block; */
`;

const Dd = styled.div`
  width: 135px;
  margin: 10px;
  position: relative;
  display: inline-block;
  background: transparent;
  /* user-select: none; */
`;

const DdBttn = styled.div`
  border: 1px solid;
  padding: 10px;
  background: transparent;
  display: flex;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const DdContent = styled.div`
  border: 1px solid;
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background: ${(props) => (props.dark ? 'grey' : '#f4f3ef')};
  width: 85%;
  z-index: 1;
  max-height: 200px;
  overflow: auto;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  /* overflow-clip-margin: 20px; */
`;

const DdItem = styled.div`
  padding: 10px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 1;
  &:hover {
    background: #D3D3D3;
  }
`;

const Slogan = styled.div`
  font-family: Poppins;
  font-size: 50px;
  font-weight: light;
  font-style: italic;
  display: block;
  width: 100%;
  margin: 15px;
  text-align: center;
  /* position: relative; */
`;

const Social = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
  /* justify-content: center; */
  /* text-align: center; */
`;

const SocialIcons = styled.span`
  margin: 5px;
  margin-left: auto;
  margin-right: auto;
  margin: 0 10px;
`;

export {
  Ov,
  Gallery,
  OVgalleryThumbs,
  OVgalleryArrowLeft,
  OVgalleryArrowRight,
  OVgalleryThumb,
  OVgalleryThumbSelect,
  GalleryBig,
  GalleryContainer,
  ImageZoomSpan,
  GalleryZoom,
  GalleryArrowL,
  GalleryArrowR,
  ImageZoom,
  ImageBig,
  Details,
  OVstars,
  RatingsLink,
  OVstarsReview,
  Category,
  Name,
  Button,
  FavButton,
  Price,
  SalePrice,
  Desc,
  Styles,
  StyleImg,
  StyleImgPad,
  Check,
  StyleImgThumb,
  StyleHeader,
  StyleSelected,
  Purchase,
  Dd,
  DdBttn,
  DdContent,
  DdItem,
  Slogan,
  Social,
  SocialIcons,
};
