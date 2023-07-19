import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { MiddleContainer, Image, LeftDiv, Title, P, A, Arrow } from './Middle.styled';
import slice1 from '../../source/slice1.jpg';
import slice2 from '../../source/slice2.jpg';
import slice3 from '../../source/slice3.jpg';

const Middle = ({ photos }) => {
  const photoList = [
    {
      src: slice1,
      alt: 'Photo 1',
      title: 'Паперові стаканчики',
      description: 'Кава та інші напої смакуватимуть ще краще, якщо вони будуть налиті у наші стаканчики з паперу.',
      link: 'Читати далі',
      href: 'https://lata.net.ua/projects/papirov_cups/',
    },
    {
      src: slice2,
      alt: 'Photo 2',
      title: 'Для взуття на всі сезони',
      description: 'Для виробників взуття ми пропонуємо найкращі рішення. Ваші клієнти будуть задоволені.',
      link: 'Читати далі',
      href: 'https://lata.net.ua/projects/the_box_under_vzuttya/',
    },
    {
      src: slice3,
      alt: 'Photo 3',
      title: 'Пакування для печива',
      description: 'Для гарної весільної забави та інших урочистих подій, добре підійдуть коробки під печиво.',
      link: 'Читати далі',
      href: 'https://lata.net.ua/projects/baskets_for_flowers/',
    },
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const currentPhoto = photoList[currentPhotoIndex];

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photoList.length - 1 : prevIndex - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === photoList.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextPhoto, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <MiddleContainer>
      {photoList.map((photo, index) => (
        <Image
          key={index}
          src={photo.src}
          alt={photo.alt}
          style={{
            opacity: index === currentPhotoIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            position: 'absolute',
          }}
        />
      ))}
      <LeftDiv>
        <Title>{currentPhoto.title}</Title>
        <P>{currentPhoto.description}</P>
        <A href={currentPhoto.href}>{currentPhoto.link}</A>
      </LeftDiv>
      <Arrow icon={faChevronRight} onClick={handleNextPhoto} direction="right" />
      <Arrow icon={faChevronLeft} onClick={handlePreviousPhoto} direction="left" />
    </MiddleContainer>
  );
};

export default Middle;