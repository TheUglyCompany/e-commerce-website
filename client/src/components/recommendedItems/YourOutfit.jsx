import React, { useState, useEffect } from 'react';
import {
  AddToOutfitCard, Carousel, CarouselContainer, NextCard, PreviousCard,
} from './Styles/RecommendedItems.styles';

function YourOutfit({ renderListFromIds, addToOutfits }) {
  const [scrollState, setScrollState] = useState(0);

  return (
    <CarouselContainer>
      <Carousel>
        <AddToOutfitCard onClick={addToOutfits}>
          <h2>+</h2>
          <p>Add To Your Outfit</p>
        </AddToOutfitCard>
        {renderListFromIds('outfit')}
      </Carousel>
      <PreviousCard />
      <NextCard />
    </CarouselContainer>
  );
}

export default YourOutfit;

// // get items dimensions
// var itemsLength = yourOutfitIds.length;``
// var itemSize = $('.container-menu').outerWidth(true);
// // get some relevant size for the paddle triggering point
// var paddleMargin = 20;

// // get wrapper width
// var getCarouselSize = function() {
// 	return $('.menu-wrapper').outerWidth();
// }
// var menuWrapperSize = getCarouselSize();
// // the wrapper is responsive
// $(window).on('resize', function() {
// 	menuWrapperSize = getCarouselSize();
// });
// // size of the visible part of the menu is equal as the wrapper size
// var menuVisibleSize = menuWrapperSize;

// // get total width of all menu items
// var getMenuSize = function() {
// 	return itemsLength * itemSize;
// };
// var menuSize = getMenuSize();
// // get how much of menu is invisible
// var menuInvisibleSize = menuSize - menuWrapperSize;

// // get how much have we scrolled to the left
// var getMenuPosition = function() {
// 	return $('.menu').scrollLeft();
// };

// // finally, what happens when we are actually scrolling the menu
// $('.menu').on('scroll', function() {

// 	// get how much of menu is invisible
// 	menuInvisibleSize = menuSize - menuWrapperSize;
// 	// get how much have we scrolled so far
// 	var menuPosition = getMenuPosition();

// 	var menuEndOffset = menuInvisibleSize - paddleMargin;

// 	// show & hide the paddles
// 	// depending on scroll position
// 	if (menuPosition <= paddleMargin) {
// 		$(leftPaddle).addClass('hidden');
// 		$(rightPaddle).removeClass('hidden');
// 	} else if (menuPosition < menuEndOffset) {
// 		// show both paddles in the middle
// 		$(leftPaddle).removeClass('hidden');
// 		$(rightPaddle).addClass('hidden');
// 	} else if (menuPosition >= menuEndOffset) {
// 		$(leftPaddle).removeClass('hidden');
// 		$(rightPaddle).addClass('hidden');
// }});

// // scroll to left
// $(rightPaddle).on('click', function() {
// 	$('.menu').animate({scrollLeft: '+=' + itemSize}, 600);
// });

// // scroll to right
// $(leftPaddle).on('click', function() {
// 	$('.menu').animate({scrollLeft: '-=' + itemSize}, 600);
// });