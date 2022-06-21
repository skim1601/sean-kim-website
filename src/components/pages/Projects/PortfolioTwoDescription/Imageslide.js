import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { PortfolioTwoFirst, PortfolioTwoSecond, PortfolioTwoThird, PortfolioTwoFourth } from '../../../../assets';
import '../Imageslide.css';

const images = [
  PortfolioTwoFirst, 
  PortfolioTwoSecond, 
  PortfolioTwoThird, 
  PortfolioTwoFourth
];

function SlideShow () {
    return (
        <div className="slide-container">
          <Slide>
            {
              images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt = ""/>)
            }
          </Slide>
        </div>
    )
}

export default SlideShow;