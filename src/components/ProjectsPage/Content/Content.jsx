import React, { useState, useEffect } from 'react';
import { MenuItem, MenuLinkActive, Projects, Project, MenuUl, MenuContainer, Img } from './Content.styled' // MenuLink 
import boxesData from './boxs.json';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

const Content = () => {
  const [selectedMenu, setSelectedMenu] = useState('all');
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    setPhotos(boxesData);
  }, []);

  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
    setIsMenuOpen(false);
    setIsAllSelected(false);
  };

  const handleAllClick = () => {
    if (!isAllSelected) {
      setIsMenuOpen(true);
    } else {
      setSelectedMenu('all');
      setIsMenuOpen(false);
    }
    setIsAllSelected((prevIsAllSelected) => !prevIsAllSelected);
  };

  const filteredPhotos = selectedMenu === 'all' ? photos : photos.filter(photo => photo.category === selectedMenu);

  return (
    <div>
      <MenuContainer>
        <MenuUl>
          <MenuItem>
            <MenuLinkActive onClick={handleAllClick} selected={selectedMenu === 'all'}>
              Всі {isMenuOpen ? <FiChevronDown /> : <FiChevronRight />}
            </MenuLinkActive>
            {isMenuOpen && ( // Показуємо список варіантів, якщо isMenuOpen === true
              <ul>
                <li>
                  <MenuLinkActive onClick={() => handleMenuChange('CorrugatedCardboard')} selected={selectedMenu === 'CorrugatedCardboard'}>
                    Гофро картон
                  </MenuLinkActive>
                </li>
                <li>
                  <MenuLinkActive onClick={() => handleMenuChange('FullColorPackaging')} selected={selectedMenu === 'FullColorPackaging'}>
                    Повноколірна упаковка
                  </MenuLinkActive>
                </li>
                <li>
                  <MenuLinkActive onClick={() => handleMenuChange('PaperCups')} selected={selectedMenu === 'PaperCups'}>
                    Паперові стаканчики
                  </MenuLinkActive>
                </li>
              </ul>
            )}
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