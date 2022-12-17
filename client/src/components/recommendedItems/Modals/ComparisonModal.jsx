/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { ModalContainer, ModalTitle, XSpan } from '../../qAndA/QandA.style';
import { ComparisonContainer, ModalContent, Stars } from '../Styles/RecommendedItems.styles';

function ComparisonModal({ cardItemObj, pageItemObj, closeModal, dark }) {
  console.log(cardItemObj);
  console.log(pageItemObj);

  const renderRows = () => {
    const newFeatures = [];
    pageItemObj.features.forEach((featureObj) => {
      newFeatures.push({
        feature: featureObj.feature,
        values: { currentProduct: featureObj.value, comparedProduct: 'N/A' },
      });
    });
    cardItemObj.features.forEach((featureObj) => {
      let featureNotExists = true;
      for (let i = 0; i < newFeatures.length; i += 1) {
        if (newFeatures[i].feature === featureObj.feature) {
          featureNotExists = false;
          newFeatures[i].values.comparedProduct = featureObj.value;
        }
      }
      if (featureNotExists) {
        newFeatures.push({
          feature: featureObj.feature,
          values: { currentProduct: 'N/A', comparedProduct: featureObj.value },
        });
      }
    });
    console.log(newFeatures);
    return newFeatures.map((featureObj) => (
      <tr>
        <td>{featureObj.values.currentProduct}</td>
        <th>{featureObj.feature}</th>
        <td>{featureObj.values.comparedProduct}</td>
      </tr>
    ));
  };

  return (
    <ModalContainer>
      <ModalContent dark={dark}>
        <XSpan onClick={closeModal}>
          X
        </XSpan>
        <ModalTitle>Comparing</ModalTitle>
        <ComparisonContainer>
          <table className="comparison-modal" style={{ margin: 'auto', width: '100%' }}>
            <colgroup>
              <col span="1" style={{width: '40%'}}/>
              <col span="1" style={{width: '20%'}}/>
              <col span="1" style={{width: '40%'}}/>
            </colgroup>
            <thead>
              <tr>
                <th>
                  {pageItemObj.name}
                </th>
                <th />
                <th>
                  {cardItemObj.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {renderRows()}
            </tbody>
          </table>
        </ComparisonContainer>
      </ModalContent>
    </ModalContainer>
  );
}

export default ComparisonModal;
