import TitleSection from 'components/TitleSection/TitleSection';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { faCartShopping, faCircleArrowLeft, faCircleArrowRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { MenuContainer, Quantity, ContainerDiv, News, ContainerP, CartIcon, ButtonShop, Settings, Gallery, GalleryContainer, PrevButton, NextButton, OpenModalContainer, CloseModalContainer } from "./EquipmentDetails.styled";

const ProductDetailsPage = ({ machenics }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const galleryRef = useRef(null);
  const itemWidth = 175; // Ширина одного елементу галереї
  const itemsPerScreen = 3; // Кількість елементів на одному екрані
  // const id = [3]

  const { photoId } = useParams();

  const selectedMachenic = machenics.find((photo) => photo.id === parseInt(photoId));

  useEffect(() => {
    if (selectedMachenic) {
      setFinalAmount(selectedMachenic.price * quantity);
    }
  }, [selectedMachenic, quantity]);

  const scrollGallery = (direction) => () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft += direction * itemWidth * itemsPerScreen;
    }
  };

  const handleGalleryClick = (photoUrl) => {
    setModalImage(photoUrl);
    setModalIsOpen(true);
  };

  const selectedPhoto = machenics.find((photo) => photo.id === parseInt(photoId));

  const showArrows = selectedPhoto.url.length > itemsPerScreen;

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
        productName: selectedMachenic.title,
        quantity,
        finalAmount,
      },
    });
  }

  return (
    <>
    <TitleSection title={selectedMachenic.title}></TitleSection>
    <MenuContainer>
      <Settings>
        <div>
          <img src={selectedMachenic.url[0]} alt={`${selectedMachenic.id}`} style={{ width: '556px'}} />
          <GalleryContainer>
                  {showArrows && <PrevButton icon={faCircleArrowLeft} onClick={scrollGallery(-1)} />}
                  <Gallery ref={galleryRef}>
                    {selectedPhoto.url.map((photoUrl, index) => (
                      <img key={index} src={photoUrl} alt={`${selectedPhoto.id}`} style={{ width: '165px', margin: '5px' }} onClick={() => handleGalleryClick(photoUrl)} />
                    ))}
                  </Gallery>
                  {showArrows && <NextButton icon={faCircleArrowRight} onClick={scrollGallery(1)} />}
          </GalleryContainer>
        </div>
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
    <OpenModalContainer isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Large Image" appElement={document.getElementById('root')}>
        {/* <div style={{display: 'flex', flexDirection: 'row-reverse' }}> */}
          <CloseModalContainer icon={faClose} onClick={() => setModalIsOpen(false)} />
        {/* </div> */}
        <div>
          <img src={modalImage} alt="Large" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
        </div>
      </OpenModalContainer>
    </>
  );
};

export default ProductDetailsPage;