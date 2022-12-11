import React from 'react';
import {
  Category,
  Name,
  Price,
  SalePrice,
  Desc,
} from './Overview.style';

function OVprodDetails({
  product, styleSelected,
}) {
  return (
    <div>
      <Category>{product.category.toUpperCase()}</Category>
      <Name>{product.name}</Name>
      <Price>
        $
        {styleSelected.sale_price
          ? (
            <span>
              <strike>{styleSelected.original_price}</strike>
              &nbsp;
              <SalePrice>{styleSelected.sale_price}</SalePrice>
            </span>
          )
          : styleSelected.original_price}
      </Price>

      <Desc>
        <em>
          &quot;
          {product.slogan}
          &quot;
        </em>
      </Desc>
      <Desc>
        {product.description}
      </Desc>
    </div>
  );
}

export default OVprodDetails;
