import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';

function CardImage({ stylesObj }) {
  return (
    <img src={stylesObj.results[0].photos[0].thumbnail_url} alt="product thumbnail" />
  )
}

export default CardImage;
