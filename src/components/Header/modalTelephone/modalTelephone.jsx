import React, { useEffect, useState } from 'react';
import { Nav, MenuItem, Ul, MenuLinkActive, Menu, A, AboutUl, AboutA, Ab, MenuTelephoneContainer } from './modalTelephone.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setName } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';
import { faCircleQuestion, faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalTelephone = ({ closeModalTelephone }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState('/');
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMouseInMenu, setIsMouseInMenu] = useState(false);
  const isLoggedInUser = useSelector((state) => state.auth.isLoggedIn);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

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

  const openModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const username = useSelector(setName);

  const handleLogout = () => {
    try {
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log('Logout failed:', error);
    }
  };

  const handleMenuItemClick = () => {
    closeModalTelephone();
  };


  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'white' }}>
      <Menu>
             <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px', color: "#9AC43C", justifyContent: 'space-between', marginBottom: '40px' }}>
               <A href="?question" title="Є запитання?" onClick={openModal}>
                 <FontAwesomeIcon icon={faCircleQuestion} style={{ height: '25px', position: 'relative', top: '3px', marginRight: 5}} />
                 Задати питання
               </A>
               <MenuTelephoneContainer>
                <Ab to="/auth/register"><FontAwesomeIcon icon={faUser} style={{ width: 20, height: 20 }}/></Ab>
                <button onClick={closeModalTelephone}>Close</button>
               </MenuTelephoneContainer>
               {/* <p>{username}</p> */}
               {isLoggedInUser && <button onClick={handleLogout}>Log out</button>}
               {isLoggedInUser && <p>{username}</p>}
             </div>
           <Nav>
             <Ul>
                <MenuItem><MenuLinkActive to="/" selected={selectedMenu === '/'} onClick={handleMenuItemClick}>Головна</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/projects" selected={selectedMenu === '/projects'} onClick={handleMenuItemClick}>Продукція</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/services" selected={selectedMenu === '/services'} onClick={handleMenuItemClick}>Послуги</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/obl" selected={selectedMenu === '/obl'} onClick={handleMenuItemClick}>Продаж обладнання</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/company" selected={selectedMenu === '/company'} onClick={handleMenuItemClick}>Про нас</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/reviews" selected={selectedMenu === '/reviews'} onClick={handleMenuItemClick}>Відгуки</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/news" selected={selectedMenu === '/news'} onClick={handleMenuItemClick}>Новини</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/articles" selected={selectedMenu === '/articles'} onClick={handleMenuItemClick}>Статті</MenuLinkActive></MenuItem>
                <MenuItem><MenuLinkActive to="/contacts" selected={selectedMenu === '/contacts'} onClick={handleMenuItemClick}>Контакти</MenuLinkActive></MenuItem>
            </Ul>
          </Nav>
          </Menu>
      </div>
  );
};

export default ModalTelephone;