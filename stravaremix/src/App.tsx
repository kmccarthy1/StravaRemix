import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import axios from 'axios';

function App() {

  const clientID = '91367';
  const clientSecret = 'fdca657660112b4e0a8c3ef32bbb86bebae9db5e';
  const refreshToken = '160616ca8b0d2d8a6f19acf5f5c6608e7bbba24c';
  const activities_link = 'https://www.strava.com/api/v3/athlete/activities'


  useEffect(() => {
    async function fetchData() {
      const stravaAuthResponse = await axios.get(`${activities_link}?access_token=62efb3c78eab7f60f5bf84828489157dde82db46`)
      console.log(stravaAuthResponse);
    }

    fetchData();
  }, []);
  return (
    <h1>testing</h1>
/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> */
  );
}

export default App;
