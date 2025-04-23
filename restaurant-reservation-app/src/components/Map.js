// components/Map.js
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function Map({ lat, lng }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return <p>Map failed to load</p>;
  if (!isLoaded)   return <p>Loading map…</p>;

  return (
    <GoogleMap
      center={{ lat, lng }}
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '200px', margin: '1rem 0' }}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
}
