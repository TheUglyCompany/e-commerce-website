import styled from 'styled-components';

const Ov = styled.div`
  overflow: visible;
  display: flex;
  width: 80%;
  margin: 30px auto;
  font-family: Poppins;
  font-size: 12px;
  font-weight: light;
`;

const Gallery = styled.div`
  float: left;
  display: block;
  width: 50%;
  /* border: 1px solid black; */
  padding: 10px;
`;

const GalleryBig = styled.div`
  text-align: center;
`;

const Details = styled.div`
  float: right;
  display: block;
  width: 40%;
  /* border: 1px solid black; */
  padding: 10px;
`;

const Category = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: light;
  padding: 0px;
  color: #3a3a3a;
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
  color: #3a3a3a;
`;

const SalePrice = styled.span`
  color: red;
`;

const Desc = styled.div`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 200;
  padding: 5px 0px;
  color: #3a3a3a;
`;

const Styles = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0px 10px 0px;
  /* border: 1px solid black; */
`;

const StyleImg = styled.img`
  src: ${(props) => `url(${props.src})`};
  border-radius:50%;
  width: 75px;
  height: 75px;
  /* border: 0px solid black; */
`;

const StyleImgPad = styled.span`
  padding: 10px;
`;

const StyleImgThumb = styled.div`
  flex: 1;
  border: 1px solid black;
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
  /* border: 1px solid black; */
`;

// const Button = styled.button`
//   background: transparent;
//   border-radius: 1px;
//   border: 1px solid black;
//   color: black;
//   padding: 10px;
//   margin: 5px 0px;
//   width: 200px;
//   cursor: pointer;
//   font-family: Roboto;
//   font-weight: bold;
//   font-size: 16px;
//   height: 50px;
//   float: left;
// `;

const Dd = styled.div`
  width: 150px;
  margin: 10px;
  position: relative;
  display: inline-block;
  background: #ffffff;
  /* user-select: none; */
`;

const DdBttn = styled.div`
  border: 1px solid black;
  padding: 10px;
  background: #ffffff;
  display: flex;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

const DdContent = styled.div`
  border: 1px solid black;
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background: #ffffff;
  width: 85%;
  z-index: 1;
  max-height: 200px;
  overflow: auto;
  /* overflow-clip-margin: 20px; */
`;

const DdItem = styled.div`
  padding: 10px;
  background: #ffffff;
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
  /* border: 1px solid black; */
  /* position: relative; */
`;

export {
  Ov,
  Gallery,
  GalleryBig,
  Details,
  Category,
  Name,
  Price,
  SalePrice,
  Desc,
  Styles,
  StyleImg,
  StyleImgPad,
  StyleImgThumb,
  StyleHeader,
  StyleSelected,
  Purchase,
  Dd,
  DdBttn,
  DdContent,
  DdItem,
  Slogan,
};
