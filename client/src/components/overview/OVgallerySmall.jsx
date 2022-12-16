/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  OVgalleryThumb,
  OVgalleryThumbSelect,
  OVgalleryThumbs,
  OVgalleryArrowLeft,
  OVgalleryArrowRight,
} from './Overview.style';

function OVgallerySmall({
  styleSelected,
  setPhotoIdx,
  setMainImg,
  mainImg,
  dark,
}) {
  const [leftArrow, setLeftArrow] = useState('none');
  const [rightArrow, setRightArrow] = useState('none');
  const [masterPhotoArr, setMasterPhotoArr] = useState([]);
  const [photoArr, setPhotoArr] = useState([]);
  const [arrStart, setArrStart] = useState(0);
  const [arrEnd, setArrEnd] = useState(7);
  const [imgIndex, setImgIndex] = useState(0);

  const changeMain = (photo, index) => {
    setMainImg(photo.url);
    setPhotoIdx(index + imgIndex);
  };

  const goLeft = () => {
    if (arrStart !== 0) {
      setArrStart(arrStart - 1);
      setArrEnd(arrEnd - 1);
      setImgIndex(imgIndex - 1);
    }
  };

  const goRight = () => {
    if (arrEnd !== masterPhotoArr.length) {
      setArrStart(arrStart + 1);
      setArrEnd(arrEnd + 1);
      setImgIndex(imgIndex + 1);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (styleSelected.photos !== undefined) {
      setMasterPhotoArr(styleSelected.photos);
      setPhotoArr(styleSelected.photos);
      setArrStart(0);
      setArrEnd(7);
    }
  }, [styleSelected]);
  useEffect(() => {
    if (masterPhotoArr.length > 7) {
      setRightArrow('flex');
      setPhotoArr(masterPhotoArr.slice(arrStart, arrEnd));
    }
  }, [masterPhotoArr]);
  useEffect(() => {
    if (arrEnd === masterPhotoArr.length) {
      setRightArrow('none');
    }
    if (arrEnd !== masterPhotoArr.length && masterPhotoArr.length > 7) {
      setRightArrow('flex');
    }
    setPhotoArr(masterPhotoArr.slice(arrStart, arrEnd));
  }, [arrEnd]);
  useEffect(() => {
    if (arrStart !== 0) {
      setLeftArrow('flex');
    }
    if (arrStart === 0) {
      setLeftArrow('none');
    }
  }, [arrStart]);

  return (
    <OVgalleryThumbs>
      <OVgalleryArrowLeft display={leftArrow} onClick={() => { goLeft(); }}>
        <img src={dark ? 'https://i.imgur.com/EbWJrAK.png' : 'https://i.imgur.com/NuTyVPZ.png'} height="30px" alt="" />
      </OVgalleryArrowLeft>
      {photoArr.length !== 0
        ? photoArr.map((photo, index) => (
          photo.url === mainImg
            ? <OVgalleryThumbSelect key={index} src={photo.thumbnail_url} onClick={() => { changeMain(photo, index); }} alt="" async />
            : <OVgalleryThumb key={index} src={photo.thumbnail_url} onClick={() => { changeMain(photo, index); }} alt="" />
        ))
        : null}
      <OVgalleryArrowRight display={rightArrow} onClick={() => { goRight(); }}>
        <img src={dark ? 'https://i.imgur.com/YAMtrZW.png' : 'https://i.imgur.com/GYCaEcb.png'} height="30px" alt="" async />
      </OVgalleryArrowRight>
    </OVgalleryThumbs>
  );
}

export default OVgallerySmall;
