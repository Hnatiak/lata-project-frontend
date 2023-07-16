import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Мій веб-сайт</h1>
      <nav>
        <ul>
          <li><a href="/">Головна</a></li>
          <li><a href="/about">Про нас</a></li>
          <li><a href="/services">Послуги</a></li>
          {/* Додайте інші пункти меню тут */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;