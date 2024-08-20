import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markers from '@data/mainData/mainMapMarkers';

function MapComponent() {
  return (
    <MapContainer
      center={[55.7558, 37.6176]}
      zoom={4}
      style={{ height: '80vh', width: '100%' }}
      scrollWheelZoom={false}
      doubleClickZoom
      dragging
      touchZoom="center"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
