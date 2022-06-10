import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    center: number[];
    position?: number[];
    zoom?: number;
    scrollWheelZoom?: boolean;
    style?: object;
    popupText?: string;
}

export const Map = (props: MapProps) => {
    const { center, zoom, scrollWheelZoom, style, popupText } = props;

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={scrollWheelZoom}
            style={style}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={center}>
                {popupText ? <Popup>{popupText}</Popup> : null}
            </Marker>
        </MapContainer>
    );
};

Map.defaultProps = {
    zoom: 10,
    scrollWheelZoom: false,
    style: { height: 400, width: '100%' },
};
