/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ls from 'local-storage';
import API_KEY from '../../../config';
import { RIContainer } from './Styles/RecommendedItems.styles';
import RelatedProducts from './RelatedProducts';
import YourOutfit from './YourOutfit';
import Card from './Card';
import NavigationButtons from './NavigationButtons';

function RecommendedItems({ product, cardClicked, dark, prodAvg, reviewCount, styles }) {
  const [relatedProductsIds, setRelatedProductsIds] = useState([]);
  const [yourOutfitIds, setYourOutfitIds] = useState([]);

  const getRatingObject = (ratingsObj) => {
    if (JSON.stringify(ratingsObj) === '{}') return { percentage: 'no rating' };
    let ratingTotal = 0;
    let ratingCount = 0;
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const rating in ratingsObj) {
      ratingTotal += parseInt(ratingsObj[rating], 10) * rating;
      ratingCount += parseInt(ratingsObj[rating], 10);
    }
    return { percentage: `${(ratingTotal / ratingCount) * 20}%`, totalReviews: ratingCount };
  };

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product.id}/related`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        for (let i = 0; i < response.data.length; i += 1) {
          if (response.data[i] === product.id) {
            response.data.splice(i, 1);
          }
        }
        setRelatedProductsIds([...new Set(response.data)]);
      })
      .catch((err) => console.log(err.message));
    if (ls('outfits') === null) {
      ls('outfits', '[]');
    }
    setYourOutfitIds(JSON.parse(ls('outfits')));
  }, []);

  const handleActionClick = (event, type, callback, cardItemId) => {
    event.stopPropagation();
    if (type === 'related') {
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
  const addToOutfits = () => {
    const currentOutfits = [...yourOutfitIds];
    if (!currentOutfits.includes(product.id)) {
      currentOutfits.unshift(product.id);
      ls('outfits', JSON.stringify(currentOutfits));
      setYourOutfitIds(currentOutfits);
    }
  };

  const renderListFromIds = (type) => {
    const itemList = type === 'related' ? relatedProductsIds : yourOutfitIds;
    return itemList.map((item, index) => (
      <Card
        key={item}
        id={`${type}-Card-${type === 'related' ? index : index + 1}`}
        cardItemId={item}
        type={type}
        dark={dark}
        pageItemObj={{ ...product, ...{ percentage: `${prodAvg * 20}%`, totalReviews: reviewCount }, ...{ styles } }}
        getRatingObject={getRatingObject}
        handleCardClick={cardClicked}
        handleActionClick={handleActionClick}
      />
    ));
  };
  const renderButtons = (type) => {
    const lastCardIndex = type === 'related' ? relatedProductsIds.length - 1 : yourOutfitIds.length;
    return <NavigationButtons dark={dark} type={type} lastCardIndex={lastCardIndex} />;
  };

  return (
    <RIContainer>
      <RelatedProducts renderButtons={renderButtons} renderListFromIds={renderListFromIds} />
      <YourOutfit renderButtons={renderButtons} renderListFromIds={renderListFromIds} addToOutfits={addToOutfits} dark={dark} />
    </RIContainer>
  );
}

export default RecommendedItems;
