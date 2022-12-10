/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { OVgalleryThumb, OVgalleryThumbs, OVgalleryArrows } from './Overview.style';

function OVgallerySmall({ styleSelected, setMainImg }) {
  const [arrow, setArrow] = useState('none');

  const changeMain = (photo) => {
    setMainImg(photo.url);
  };

  let photoArr;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (styleSelected.photos !== undefined) {
      photoArr = styleSelected.photos;
      if (photoArr.length > 7) {
        setArrow('flex');
      }
    }
  }, [styleSelected]);

  return (
    <OVgalleryThumbs>
      <OVgalleryArrows display={arrow}>
        <img src="https://cdn-icons-png.flaticon.com/512/7185/7185277.png" height="30px" alt="" />
      </OVgalleryArrows>
      {styleSelected.photos !== undefined
        ? styleSelected.photos.map((photo, index) => (
          <OVgalleryThumb key={index} src={photo.thumbnail_url} onClick={() => { changeMain(photo); }} alt="" />
        )) : null}
      <OVgalleryArrows display={arrow}>
        <img src="https://cdn-icons-png.flaticon.com/512/7185/7185281.png" height="30px" alt="" />
      </OVgalleryArrows>
    </OVgalleryThumbs>
  );
}

export default OVgallerySmall;
