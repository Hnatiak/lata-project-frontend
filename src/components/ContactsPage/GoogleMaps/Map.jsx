import React, { useEffect } from 'react';

const Map = () => {
  const mapContainerRef = React.createRef();

  useEffect(() => {
    const googleScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    googleScript.defer = true;
    googleScript.async = true;
    window.initMap = initMap;
    document.head.appendChild(googleScript);

    // Функція для створення і показу карти
    function initMap() {
      const mapOptions = {
        center: { lat: 49.907329, lng: 24.118481 },
        zoom: 15,
      };
      new window.google.maps.Map(mapContainerRef.current, mapOptions);
    }
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;