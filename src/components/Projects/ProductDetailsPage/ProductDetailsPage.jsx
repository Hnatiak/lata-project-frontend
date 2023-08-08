// ProductDetailsPage.jsx
import TitleSection from 'components/TitleSection/TitleSection';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { MenuContainer, Quantity, ContainerDiv, News, ContainerP, CartIcon, ButtonShop } from "./ProductDetailsPage.styled"

const ProductDetailsPage = ({ photos }) => {
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(0); // Initialize with 0

  const { photoId } = useParams();

  const selectedPhoto = photos.find((photo) => photo.id === parseInt(photoId));

  // Update finalAmount after finding selectedPhoto
  useEffect(() => {
    if (selectedPhoto) {
      setFinalAmount(selectedPhoto.price * quantity); // Розрахунок, тобто що на скільки множити
    }
  }, [selectedPhoto, quantity]);

  const increment = () => {
    setQuantity(quantity + 1);
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity)) {
      setQuantity(newQuantity);
    }
  }

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }

  return (
    <>
    <TitleSection title={selectedPhoto.title}></TitleSection>
    <MenuContainer>
      <img src={selectedPhoto.url} alt={`${selectedPhoto.id}`} />
      <div>
        <Quantity quantityLength={quantity.toString().length}>
          <div>
            <span onClick={decrement}>-</span>
            <input type="text" value={quantity} maxLength={10} onChange={handleQuantityChange} />
            <span onClick={increment}>+</span>
          </div>
            <div>Загальна ціна: <span style={{fontWeight: 'bold', fontSize: '25px', color: 'black' }}>{finalAmount}</span></div>
          <div>
            <ButtonShop><CartIcon icon={faCartShopping} />КУПИТИ</ButtonShop>
          </div>
        </Quantity>
      </div>
      <ContainerDiv>
        <div>
          <News>Основне</News>
          <ContainerP>{selectedPhoto.description}</ContainerP>
        </div>
        <div>
          <News>Детальніше</News>
          <ContainerP>{selectedPhoto.details.split('\n').map((line, index) => (
            <p key={index}>{line}<br /></p>))}
          </ContainerP>
        </div>
        </ContainerDiv>
    </MenuContainer>
    </>
  );
};

export default ProductDetailsPage;