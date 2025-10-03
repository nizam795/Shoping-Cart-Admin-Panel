import React from 'react'
import "../pages/ProductDetails/productdetails.css"

type Props ={
    images:string[];
    onImageSelect :(image:string)=>void
}

const ImageSlide:React.FC<Props> = ({images,onImageSelect}) => {
  return (
    <div className="image-slider-container flex justify-center">
      <div className="small-image-container">
        {images.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className="small-image-slide"
            onClick={() => onImageSelect(img)}
          />
         ))} 
      </div>
    </div>
  )
}

export default ImageSlide