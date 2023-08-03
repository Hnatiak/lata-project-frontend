import React from 'react';

const GoogleMaps = () => {
  const mapStyle = {
    border: '1px',
    width: '100%',
    height: '450px',
  };
  

  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.4742942329544!2d24.145372713112984!3d49.75833463683529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae9df32e91251%3A0x829abdc77fafa89f!2z0JvQsNGC0LAg0J_Qnw!5e0!3m2!1suk!2sfr!4v1690461015674!5m2!1suk!2sfr" 
      style={mapStyle}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"></iframe>
    </>
  );
};

export default GoogleMaps;