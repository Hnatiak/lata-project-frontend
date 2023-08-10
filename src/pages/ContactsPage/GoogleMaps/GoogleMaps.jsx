import React from 'react';

const GoogleMaps = () => {
  const mapStyle = {
    border: '1px',
    width: '100%',
    height: '450px',
  };
  

  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1134.684500270092!2d24.14851776347659!3d49.75880068466696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473aebefe4b62d09%3A0xd6d7f0e1833a62a2!2z0JDQs9GA0L4g0JvQsNC50YQg0KLRgNCw0L3RgSDQodC10YDQstGW0YE!5e1!3m2!1suk!2sfr!4v1691571401522!5m2!1suk!2sfr"
      style={mapStyle}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps"></iframe>
    </>
  );
};

export default GoogleMaps;