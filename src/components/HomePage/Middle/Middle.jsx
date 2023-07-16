// import React, { useState } from 'react';
import { MiddleContainer } from './Middle.styled'

const Middle = ({ photos }) => {
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

//   const handlePreviousPhoto = () => {
//     setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
//   };

//   const handleNextPhoto = () => {
//     setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
//   };

  return (
    <MiddleContainer>
      {/* <button onClick={handlePreviousPhoto}>Previous</button>
        {/* <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} />
      <button onClick={handleNextPhoto}>Next</button> */}
      <p>Hello</p>
    </MiddleContainer>
  );
};

export default Middle;