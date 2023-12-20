// Importing the required modules
"use client"
import { GoogleMap, HeatmapLayer, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAN6b_-hDFORuqIbR3NITLQOv9L8IMmHzs",
    libraries: ['visualization'],
  });

  const center = { lat: 40.7128, lng: -74.0060 };
  const [map, setMap] = useState(null);
  const heatMapData = [
    { lat: 40.7128, lng: -74.0060 },
    // Add more data points as needed
  ];

  // If the Google Maps API is not loaded yet, show a loading message
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Return the GoogleMap component with the heatmap and marker
  return (
    <main>
      <GoogleMap
        mapContainerStyle={{ position: 'relative', height: '100vh', width: '100%' }}
        center={center}
        zoom={12}
        onLoad={(map) => setMap(map)}
      >
        {map && (
          <>
            <HeatmapLayer
              data={heatMapData.map((data) => ({
                location: new google.maps.LatLng(data.lat, data.lng),
                weight: 1, // You can adjust the weight based on your data
              }))}
              options={{ radius: 50 }}
            />
            <Marker position={center} />
          </>
        )}
      </GoogleMap>
    </main>
  );
}
