import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Logo } from './Logo';

export function ContactMap() {
  // Coordinates for Nairobi, Kenya
  const position = [-1.284053488759688, 36.98512901573174]; 

  return (
    <div className='contactmap' style={{ height: '300px', width: '100%', borderRadius: '15px', overflow: 'hidden' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={position}>
          <Popup>
            {<Logo/>} is based here! 🇰🇪 <br /> Open for collaborations.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}