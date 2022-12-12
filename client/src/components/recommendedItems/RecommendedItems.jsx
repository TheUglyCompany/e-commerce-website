/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ls from 'local-storage';
import API_KEY from '../../../config';
import { RICenterContainer, RIMasterContainer } from './Styles/RecommendedItems.styles';
import RelatedProducts from './RelatedProducts';
import YourOutfit from './YourOutfit';
import Card from './Card';

function RecommendedItems({ product, cardClicked }) {
  const [relatedProductsIds, setRelatedProductsIds] = useState([]);
  const [yourOutfitIds, setYourOutfitIds] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product.id}/related`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        setRelatedProductsIds(response.data);
      })
      .catch((err) => console.log(err.message));
    if (ls('outfits') === null) {
      ls('outfits', '[40964, 40364, 40436, 40913, 41347]');
    }
    setYourOutfitIds(JSON.parse(ls('outfits')));
  }, []);

  const handleActionClick = (event, type, callback, cardItemId) => {
    event.stopPropagation();
    if (type === 'related') {
      console.log('related');
      console.log(callback);
      callback(true);
    } else if (type === 'outfit') {
      const currentOutfits = [...yourOutfitIds];
      if (currentOutfits.includes(cardItemId)) {
        currentOutfits.splice(currentOutfits.indexOf(cardItemId), 1);
        ls('outfits', JSON.stringify(currentOutfits));
        setYourOutfitIds(currentOutfits);
      }
    }
  };
  const renderListFromIds = (type) => {
    const itemList = type === 'related' ? relatedProductsIds : yourOutfitIds;
    return itemList.map((item) => <Card key={item} cardItemId={item} type={type} handleCardClick={cardClicked} handleActionClick={handleActionClick} />);
  };

  return (
    <RIMasterContainer>
      <RICenterContainer>
        <RelatedProducts renderListFromIds={renderListFromIds} />
        <YourOutfit renderListFromIds={renderListFromIds} />
      </RICenterContainer>
    </RIMasterContainer>
  );
}

export default RecommendedItems;
