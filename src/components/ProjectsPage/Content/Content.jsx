import React, { useState, useEffect } from 'react';
import { MenuItem, MenuLinkActive, Projects, Project, MenuUl, MenuContainer } from './Content.styled' // MenuLink 
import boxesData from './boxs.json';

const Content = () => {
  const [selectedMenu, setSelectedMenu] = useState('all');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(boxesData);
  }, []);

  const handleMenuChange = (category) => {
    setSelectedMenu(category);
  };

  const filteredPhotos = selectedMenu === 'all' ? photos : photos.filter(photo => photo.category === selectedMenu);

  return (
    <div>
      <MenuContainer>
        <MenuUl> 
          <MenuItem>
            <MenuLinkActive onClick={() => handleMenuChange('all')} selected={selectedMenu === 'all'}>Всі</MenuLinkActive>
          </MenuItem>
            <MenuItem><MenuLinkActive onClick={() => handleMenuChange('CorrugatedCardboard')} selected={selectedMenu === 'CorrugatedCardboard'} href="#" title="">Гофро картон</MenuLinkActive>
          </MenuItem>
            <MenuItem><MenuLinkActive onClick={() => handleMenuChange('FullColorPackaging')} selected={selectedMenu === 'FullColorPackaging'} href="#" title="">Повноколірна упаковка</MenuLinkActive>
          </MenuItem>
            <MenuItem><MenuLinkActive onClick={() => handleMenuChange('PaperCups')} selected={selectedMenu === 'PaperCups'} href="#" title="">Паперові стаканчики</MenuLinkActive>
          </MenuItem>
        </MenuUl>
      </MenuContainer>
      <Projects>
        {filteredPhotos.map(photo => (
          <Project key={photo.id}>
            <img src={photo.url} alt={`Photo ${photo.id}`} />
          </Project>
        ))}
      </Projects>
    </div>
  );
};

export default Content;