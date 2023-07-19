import React, { useEffect, useState } from 'react';
import { faCircleQuestion, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalQuestion from './modal/ModalQuestion';
import {HeaderWrapper, Logo, LogoImage, LogoText, Nav, MenuItem, Ul, MenuLinkActive, Menu, A, AboutUl, AboutA} from './ComponentsHeader.styled' // MenuLink,
import { useLocation } from 'react-router-dom';
// GeneralHeader,

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState('/');
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMouseInMenu, setIsMouseInMenu] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);
  
  const handleDropdownClose = () => {
        setIsMouseInMenu(false);
        setTimeout(() => {
          if (!isMouseInMenu) {
            setIsDropdownOpen(false);
          }
        }, 8000);
      };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <HeaderWrapper>
          <Logo>
            <LogoImage src="https://lata.net.ua/upload/medialibrary/543/5436204c869274d18960335378c3010b.png" href='/' alt="Logo" />
            <LogoText>Лата - надійний партнер у поліграфічній галузі</LogoText>
          </Logo>
          <Menu>
            <A href="#" title="Є запитання?" onClick={openModal}>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ height: '25px', position: 'relative', top: '3px', marginRight: 5}} />
              Задати питання
            </A>
            {isModalOpen && <ModalQuestion closeModal={closeModal} />}
          <Nav>
            <Ul>
              <MenuItem><MenuLinkActive to="/" selected={selectedMenu === '/'}>Головна</MenuLinkActive></MenuItem>
              <MenuItem><MenuLinkActive to="/projects" selected={selectedMenu === '/projects'}>Продукція</MenuLinkActive></MenuItem>
              <MenuItem><MenuLinkActive to="/services" selected={selectedMenu === '/services'}>Послуги</MenuLinkActive></MenuItem>
              <MenuItem><MenuLinkActive to="/obl" selected={selectedMenu === '/obl'}>Продаж обладнання</MenuLinkActive></MenuItem>
              <MenuItem><MenuLinkActive to="/company" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownClose} selected={selectedMenu === '/company'}>
                  Про нас
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: '5px' }}
                  />
                </MenuLinkActive>
                {isDropdownOpen && (
                  <AboutUl>
                    <AboutA to="/company/questions">Часті питання</AboutA>
                    <AboutA to="/company/vacancies">Вакансії</AboutA>
                  </AboutUl>
                )}
              </MenuItem>
              <MenuItem><MenuLinkActive to="/reviews" selected={selectedMenu === '/reviews'}>Відгуки</MenuLinkActive></MenuItem>
              <MenuItem><MenuLinkActive to="/news" selected={selectedMenu === '/news'}>Новини</MenuLinkActive></MenuItem>
              <MenuItem><MenuLinkActive to="/articles" selected={selectedMenu === '/articles'}>Статті</MenuLinkActive></MenuItem>
              <MenuItem><MenuLinkActive to="/contacts" selected={selectedMenu === '/contacts'}>Контакти</MenuLinkActive></MenuItem>
            </Ul>
          </Nav>
          </Menu>
        </HeaderWrapper>
    );
  };
  
export default Header;