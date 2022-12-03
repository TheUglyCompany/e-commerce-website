import styled from 'styled-components';

const Ov = styled.div`
  overflow:hidden;
  width: 80%;
  margin: auto;
`;

const Gallery = styled.div`
  float: left;
  width: 50%;
  border: 0px;
  border-style: solid;
  padding: 10px;
`;

const GalleryBig = styled.div`
  text-align: center;
`;

const Details = styled.div`
  float: right;
  width: 40%;
  border: 0px;
  border-style: solid;
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

const Styles = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  /* border: 1px solid black; */
`;

// const StyleImg = styled.img`
//   border-radius:50%;
//   width: 75px;
//   height: 75px;
//   border: 0px solid black;
// `;

const StylePreview = styled.span`
  float: left;
  margin: 10px;
  /* display: block; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-around;
`;

const StyleOption = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin: 5px;
  /* border: 1px solid black; */
`;

const StyleContent = styled.span`
  font-family: Poppins;
  font-size: 8px;
  font-weight: light;
  text-align: center;
  display: block;
  /* border: 1px solid black; */
`;

const Purchase = styled.div`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 0px 0px 0px;
  display: block;
  float: left;
  /* border: 1px solid black; */
`;

const Button = styled.button`
  background: transparent;
  border-radius: 1px;
  border: 1px solid black;
  color: black;
  padding: 10px;
  margin: 5px 0px;
  width: 200px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  float: left;
`;

const DropdownStyle = styled.select`
  padding: 10px;
  margin: 15px 0px 10px 0px;
  width: 200px;
  background: transparent;
  border: 1px solid #000000;
  color: #000000;
  font-family: Poppins;
  font-size: 15px;
  font-weight: light;
  height: 50px;
  float: left;
`;

const DropdownStyleSelect = styled.option`
  font-family: Poppins;
  font-size: 12px;
  font-weight: light;
  color: black;
`;

export {
  Ov,
  Gallery,
  GalleryBig,
  Details,
  Category,
  Name,
  Price,
  Styles,
  // StyleImg,
  StyleOption,
  Purchase,
  Button,
  StylePreview,
  StyleContent,
  DropdownStyle,
  DropdownStyleSelect,
};
