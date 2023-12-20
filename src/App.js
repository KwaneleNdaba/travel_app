import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Room, Star } from "@mui/icons-material";
export default function App() {
  const [showPopup, setShowPopup] = React.useState(true);
  return (
    <div>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={{
          longitude: 30,
          latitude: -3,
          zoom: 4,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      >
        <Marker
          latitude={-5.89624}
          longitude={22.41659}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room
            onClick={() => setShowPopup((prev) => !prev)}
            style={{ color: "red" }}
          />
        </Marker>
        {showPopup && (
          <Popup
            longitude={22.41659}
            latitude={-5.89624}
            anchor="left"
            onClose={() => setShowPopup(false)}
          >
            <div className="card">
              <label>Place</label>
              <h4 className="place">Kanaga</h4>
              <label>Review</label>
              <p>One of the most beautful countries in the world</p>
              <label>Rating</label>
            <div className="stars">
            <Star/>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
            </div>
              <label>Information</label>
              <span className="username">Created by <b>Kwanele</b></span>
              <span className="date">1 hour ago</span>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
