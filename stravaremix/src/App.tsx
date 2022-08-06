import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css'
import axios from 'axios'

function App() {


  const [activities, setActivities] = useState<Node[]>([]);


  const clientID = '91367';
  const clientSecret = 'fdca657660112b4e0a8c3ef32bbb86bebae9db5e';
  const refreshToken = '160616ca8b0d2d8a6f19acf5f5c6608e7bbba24c';
  const auth_link = 'https://www.strava.com/oauth/token';
  const activities_link = 'https://www.strava.com/api/v3/athlete/activities';


  useEffect(() => {

    async function fetchData() {

      const stravaAuthResponse = await axios.all([
        axios.post(`${auth_link}?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
      ]);
      const stravaActivityResponse = await axios.get(`${activities_link}?access_token=${stravaAuthResponse[0].data.access_token}`);
      console.log(stravaActivityResponse.data[0].name);
      setActivities(stravaActivityResponse.data[0].name)
    }

    fetchData();
  }, []);
  return (
    <h2>test</h2>
    <h1></h1>
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
