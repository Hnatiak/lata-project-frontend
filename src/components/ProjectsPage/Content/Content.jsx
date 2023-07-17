import React from 'react';
import { MenuItem, MenuLinkActive, MenuLink, Projects, Project } from './Content.styled'
// import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      <div style={{ width: '1170px', marginLeft: '25px'}}>
        <ul style={{display: 'flex', gap: '15px', margin: '30px 0 30px 0' }}> 
            {/* Filter */}
            <MenuItem><MenuLinkActive class="all active">Всі</MenuLinkActive></MenuItem>
            <MenuItem><MenuLink href="#" title="">Гофро картон</MenuLink></MenuItem>
            <MenuItem><MenuLink href="#" title="">Повноколірна упаковка</MenuLink></MenuItem>
            <MenuItem><MenuLink href="#" title="">Паперові стаканчики</MenuLink></MenuItem>
        </ul>
      </div>
      <Projects>
        <Project><img src="https://lata.net.ua/upload/iblock/e30/e3004b9e853c5349de02cff019800a9d.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/4f4/4f475122ed54c716e0118fc8405fdfe9.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/087/0876dc1fb8e50b9e213c56fc6f902a9d.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/4e3/4e32ce41d984baecc2e328feadba8b06.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/e1b/e1bb5363ac4845835de0b05c606198f4.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/71c/71c7e18cf02850d6c1c5bff9086068bc.JPG" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/3bf/3bfab81050f3b9d4beeb2d6d4afab5e6.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/abb/abbb05b2879c1c9247d51d3a91dd3ae7.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/20d/20d2fdb81fe4c85f2d6bf5f98f7bac62.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/733/7337fb2ad727930e4e5b6d6a2a585519.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/e04/e0495bd924fb1ff2158e4dd9137b6062.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/de9/de9131776ff0a2d3242d740a8b89e40d.JPG" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/8cd/8cda98a7a69811aa9e459d5ce846b26d.JPG" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/dcc/dcccc8748f6dab9d34006a5560a31d13.jpg" alt="" /></Project>
        <Project><img src="https://lata.net.ua/upload/iblock/683/683a0f03f26554fb562ca3f099df53a6.jpg" alt="" /></Project>
        <Project><img src="" alt="" /></Project>
      </Projects>
    </div>
  );
};

export default Content;