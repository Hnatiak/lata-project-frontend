import { NavLink } from 'react-router-dom';
import { Container, FooterContainer, Menu, ContactsLi, Title, Contacts, LinkLi  } from './Footer.styled' //LeftSideBar, RightSideBar, ContainerH3, ContainerAButton, ContainerH5, ContainerDiv, News, ContainerA, ContainerTitle, ContainerP

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Menu>
                    <Title>Корисні посилання</Title>
                    <ul>
                        <LinkLi><NavLink to="/company/">Про нас</NavLink></LinkLi>
                        <LinkLi><NavLink to="/services/">Наші послуги</NavLink></LinkLi>
                        <LinkLi><NavLink to="/contacts/">Контакти</NavLink></LinkLi>
                        <LinkLi><NavLink to="/projects/">Каталог продукції</NavLink></LinkLi>
                    </ul>
                </Menu>
                <Menu>
                    <Title>Наші переваги</Title>
                    <ul>
                        <li style={{ padding: '2px 0 2px 0' }}>Якісно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Доступно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Вчасно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Зручно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Надійно</li>
                    </ul>
                </Menu>
                <Menu>
                    <Title>Про нас</Title>
                    <p style={{ color: '#bbb' }}>Компанія <b>"ЛАТА ПП"</b> засновано на досвіді повсякденного застосування.</p>
                </Menu>
                <Contacts>
                    <Title>Зв'яжіться з нами</Title>
                    <ul>
                        <ContactsLi><a href='tel:+380504301696'>+38 (050) 430-16-96</a></ContactsLi>
                        <ContactsLi><a href='tel:+380673231734'>+38 (067) 323-17-34</a></ContactsLi>
                        <ContactsLi><a href='tel:+380673231736'>+38 (067) 323-17-36</a></ContactsLi>
                        <ContactsLi><a href='mailto:lata.net.ua@gmail.com'>lata.net.ua@gmail.com</a></ContactsLi>
                    </ul>
                    {/* <a href='tel:+380504301696' style={{ lineHeight: '1.6em' }}>+38 (050) 430-16-96</a>
                    <a href='tel:+380673231734' style={{ lineHeight: '1.6em' }}>+38 (067) 323-17-34</a>
                    <a href='tel:+380673231736' style={{ lineHeight: '1.6em' }}>+38 (067) 323-17-36</a>
                    <a href='mailto:lata.net.ua@gmail.com'>lata.net.ua@gmail.com</a> */}
                </Contacts>
            </Container>
            <div>
            <div style={{ background: '#0a0a0a', padding: '30px' }}>
					<a href="https://github.com/Hnatiak" target="_blank" rel="noopener noreferrer" title="Розробка сайту Hnatiak Roman">© Розробка сайту Hnatiak Roman</a>	
                    <div>
                        {/* <ul class="social-network">
                            <li>
	                    		<a href="/" data-placement="bottom" title="" data-original-title="Facebook"><i class="icon-facebook icon-square"></i></a>
	                    	</li>
                            <li>
	                    		<a href="/" data-placement="bottom" title="" data-original-title="Twitter"><i class="icon-twitter icon-square"></i></a>
	                    	</li>
                            <li>
	                    		<a href="/" data-placement="bottom" title="" data-original-title="Linkedin"><i class="icon-linkedin icon-square"></i></a>
	                    	</li>
                            <li>
	                    		<a href="/" data-placement="bottom" title="" data-original-title="Pinterest"><i class="icon-pinterest icon-square"></i></a>
	                    	</li>
                            <li>
	                    		<a href="/" data-placement="bottom" title="" data-original-title="Google plus"><i class="icon-google-plus icon-square"></i></a>
	                    	</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;