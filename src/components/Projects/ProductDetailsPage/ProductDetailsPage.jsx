// ProductDetailsPage.jsx
import TitleSection from 'components/TitleSection/TitleSection';
import React from 'react';
import { useParams } from 'react-router-dom';
import { MenuContainer } from "./ProductDetailsPage.styled"

const ProductDetailsPage = ({ photos }) => {
  const { photoId } = useParams();

  // Find the selected photo by its ID from the URL params
  const selectedPhoto = photos.find((photo) => photo.id === parseInt(photoId));

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }

  return (
    <>
    <TitleSection title={selectedPhoto.title}></TitleSection>
    <MenuContainer>
      <img src={selectedPhoto.url} alt={`${selectedPhoto.id}`} />
      <div>
        <p>{selectedPhoto.price}</p>
        {/* Add any other details you want to display */}
        {/* Add the link to the page where the user can buy the product */}
      </div>
    </MenuContainer>
    </>
  );
};

export default ProductDetailsPage;