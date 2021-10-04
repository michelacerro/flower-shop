// Icons
import {FaMapMarkerAlt} from 'react-icons/fa';

// Dependencies
import React from 'react';
import GoogleMapReact from 'google-map-react';


const Marker = () => <div><FaMapMarkerAlt /></div>

const Map = () => {
    return (
        <GoogleMapReact 
            bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_API_KEY}}
            defaultCenter={{lat: 45.10665, lng: 7.63042}}
            defaultZoom={15}
        >
            <Marker 
                lat={45.10665}
                lng={7.63042}
            />
        </GoogleMapReact>
    );
    };
    export default Map;