import TitleSection from 'components/TitleSection/TitleSection';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { MenuContainer, Quantity, ContainerDiv, News, ContainerP, CartIcon, ButtonShop, Settings } from "./EquipmentDetails.styled";

const ProductDetailsPage = ({ machenics }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(0);

  const { photoId } = useParams();

  const selectedMachenic = machenics.find((photo) => photo.id === parseInt(photoId));

  useEffect(() => {
    if (selectedMachenic) {
      setFinalAmount(selectedMachenic.price * quantity);
    }
  }, [selectedMachenic, quantity]);

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

  if (!selectedMachenic) {
    return <div>Photo not found</div>;
  }

  const handleBuyClick = () => {
    navigate(`/projects/${photoId}/buy`, {
      state: {
        photoItem: selectedMachenic.url,
        productName: selectedMachenic.title, // Передача назви коробки
        quantity, // Передача кількості
        finalAmount, // Передача ціни
      },
    });
  }

  return (
    <>
    <TitleSection title={selectedMachenic.title}></TitleSection>
    <MenuContainer>
      <Settings>
      <img src={selectedMachenic.url} alt={`${selectedMachenic.id}`} />
      <div>
        <Quantity quantityLength={quantity.toString().length}>
          <div>
            <span onClick={decrement}>-</span>
            <input type="text" value={quantity} maxLength={10} onChange={handleQuantityChange} />
            <span onClick={increment}>+</span>
          </div>
            <div>Загальна ціна: <span style={{fontWeight: 'bold', fontSize: '25px', color: 'black' }}>{finalAmount} грн</span></div>
          <div>
            <ButtonShop onClick={handleBuyClick}><CartIcon icon={faCartShopping} />КУПИТИ</ButtonShop>
          </div>
        </Quantity>
        </div>
      </Settings>
      <ContainerDiv>
        <div>
          <News>Основне</News>
          <ContainerP>{selectedMachenic.description}</ContainerP>
        </div>
        <div>
          <News>Детальніше</News>
          <div>{selectedMachenic.details.split('\n').map((line, index) => (
            <p key={index}>{line}<br /></p>))}
          </div>
        </div>
        </ContainerDiv>
    </MenuContainer>
    </>
  );
};

export default ProductDetailsPage;