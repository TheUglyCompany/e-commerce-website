/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  OVgalleryThumb,
  OVgalleryThumbs,
  OVgalleryArrowLeft,
  OVgalleryArrowRight,
} from './Overview.style';

function OVgallerySmall({ styleSelected, setMainImg }) {
  const [leftArrow, setLeftArrow] = useState('none');
  const [rightArrow, setRightArrow] = useState('none');
  const [masterPhotoArr, setMasterPhotoArr] = useState([]);
  const [photoArr, setPhotoArr] = useState([]);
  const [arrStart, setArrStart] = useState(0);
  const [arrEnd, setArrEnd] = useState(7);

  const changeMain = (photo) => {
    // console.log('photo: ', photo.url);
    setMainImg(photo.url);
  };

  const goLeft = () => {
    if (arrStart !== 0) {
      setArrStart(arrStart - 1);
      setArrEnd(arrEnd - 1);
    }
  };

  const goRight = () => {
    if (arrEnd !== masterPhotoArr.length) {
      setArrStart(arrStart + 1);
      setArrEnd(arrEnd + 1);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (styleSelected.photos !== undefined) {
      setMasterPhotoArr(styleSelected.photos);
      setPhotoArr(styleSelected.photos);
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
        <img src="https://cdn-icons-png.flaticon.com/512/7185/7185277.png" height="30px" alt="" />
      </OVgalleryArrowLeft>
      {photoArr.length !== 0
        ? photoArr.map((photo, index) => (
          <OVgalleryThumb key={index} src={photo.thumbnail_url} onClick={() => { changeMain(photo); }} alt="" />
        ))
        : null}
      <OVgalleryArrowRight display={rightArrow} onClick={() => { goRight(); }}>
        <img src="https://cdn-icons-png.flaticon.com/512/7185/7185281.png" height="30px" alt="" />
      </OVgalleryArrowRight>
    </OVgalleryThumbs>
  );
}

export default OVgallerySmall;
