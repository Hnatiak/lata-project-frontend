import { NavLink } from 'react-router-dom';
import { Container  } from './Footer.styled' //LeftSideBar, RightSideBar, ContainerH3, ContainerAButton, ContainerH5, ContainerDiv, News, ContainerA, ContainerTitle, ContainerP

const Footer = () => {
    return (
        <Container>
            <div style={{ display: 'flex', padding: '60px 25px', justifyContent: 'space-between' }}>
                <div style={{ width: '270px' }}>
                    <h5 style={{ fontWeight: 300, marginBottom: '20px', color: '#eee', fontSize: '24px' }}>Корисні посилання</h5>
                    <ul>
                        <li style={{ padding: '2px 0 2px 0' }}><NavLink to="/company/">Про нас</NavLink></li>
                        <li style={{ padding: '2px 0 2px 0' }}><NavLink to="/services/">Наші послуги</NavLink></li>
                        <li style={{ padding: '2px 0 2px 0' }}><NavLink to="/contacts/">Контакти</NavLink></li>
                        <li style={{ padding: '2px 0 2px 0' }}><NavLink to="/projects/">Каталог продукції</NavLink></li>
                    </ul>
                </div>
                <div style={{ width: '270px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <h5 style={{ fontWeight: 300, marginBottom: '20px', color: '#eee', fontSize: '24px' }}>Наші переваги</h5>
                    <ul>
                        <li style={{ padding: '2px 0 2px 0' }}>Якісно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Доступно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Вчасно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Зручно</li>
                        <li style={{ padding: '2px 0 2px 0' }}>Наійно</li>
                    </ul>
                </div>
                <div style={{ width: '270px' }}>
                    <h5 style={{ fontWeight: 300, marginBottom: '20px', color: '#eee', fontSize: '24px' }}>Про нас</h5>
                    <p style={{ color: '#fff' }}>Компанія<b>"ЛАТА ПП"</b>засновано на досвіді повсякденного застосування.</p>
                </div>
                <div style={{ width: '270px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h5 style={{ fontWeight: 300, marginBottom: '20px', color: '#eee', fontSize: '24px' }}>Зв'яжіться з нами</h5>
                    <a href='tel:+380504301696' style={{ lineHeight: '1.6em' }}>+38 (050) 430-16-96</a>
                    <a href='tel:+380673231734' style={{ lineHeight: '1.6em' }}>+38 (067) 323-17-34</a>
                    <a href='tel:+380673231736' style={{ lineHeight: '1.6em' }}>+38 (067) 323-17-36</a>
                    <a href='mailto:lata.net.ua@gmail.com'>lata.net.ua@gmail.com</a>
                </div>
            </div>
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
        </Container>
    );
};

export default Footer;