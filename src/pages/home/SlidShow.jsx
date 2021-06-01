import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'https://wallpaperaccess.com/full/329583.jpg',
  'https://i.pinimg.com/originals/9e/14/80/9e1480d62a34a74d11eb7b13f9c19a8b.jpg',
  'https://wallpaperaccess.com/full/329585.jpg'
];

export const SlidShow = () => {
    return (
      <div className="slide-container">
        <Slide>
            {slideImages.map(ele => <div className="each-slide">
            <div style={{'backgroundImage': `url(${ele})` , height :600 , backgroundSize : "cover" , backgroundPosition : "center"}}>
              
            </div>
          </div> )}
        </Slide>
      </div>
    )
}