import React, { useState } from 'react';
import { faCircleQuestion, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalQuestion from './modal/ModalQuestion';
import {HeaderWrapper, Logo, LogoImage, LogoText, Nav, MenuItem, MenuLink, Ul, MenuLinkActive, Menu, A, AboutUl, AboutA} from './ComponentsHeader.styled' 
// GeneralHeader,

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMouseInMenu, setIsMouseInMenu] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
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

    return (
        <HeaderWrapper>
          <Logo>
            <LogoImage src="https://lata.net.ua/upload/medialibrary/543/5436204c869274d18960335378c3010b.png" href='/' alt="Logo" />
            <LogoText>Лата - надійний партнер у поліграфічній галузі</LogoText>
          </Logo>
          <Menu>
            <A href="/ask-question" title="Є запитання?" onClick={openModal}>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ height: '25px', position: 'relative', top: '3px', marginRight: 5}} />
              Задати питання
              {isModalOpen && <ModalQuestion closeModal={() => setIsModalOpen(false)} />}
            </A>
          <Nav>
            <Ul>
              <MenuItem><MenuLink to="/">Головна</MenuLink></MenuItem>
              <MenuItem><MenuLinkActive to="/projects">Продукція</MenuLinkActive></MenuItem>
              <MenuItem><MenuLink to="/services">Послуги</MenuLink></MenuItem>
              <MenuItem><MenuLink to="/obl">Продаж обладнання</MenuLink></MenuItem>
              {/* <MenuItem><MenuLink href="/company">Про нас</MenuLink></MenuItem> */}
              <MenuItem>
                <MenuLink to="/company"
                  onMouseEnter={handleDropdownToggle}
                  onMouseLeave={handleDropdownClose}
                >
                  Про нас
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    style={{ marginLeft: '5px' }}
                  />
                </MenuLink>
                {isDropdownOpen && (
                  <AboutUl>
                    <AboutA to="/company/questions">Часті питання</AboutA>
                    <AboutA to="/company/vacancies">Вакансії</AboutA>
                  </AboutUl>
                )}
              </MenuItem>
              <MenuItem><MenuLink to="/reviews">Відгуки</MenuLink></MenuItem>
              <MenuItem><MenuLink to="/news">Новини</MenuLink></MenuItem>
              <MenuItem><MenuLink to="/articles">Статті</MenuLink></MenuItem>
              <MenuItem><MenuLink to="/contacts">Контакти</MenuLink></MenuItem>
            </Ul>
          </Nav>
          </Menu>
        </HeaderWrapper>
    );
  };
  
export default Header;