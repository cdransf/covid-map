import { useJson } from '@/hooks/useJson';
import useGeolocation from 'react-hook-geolocation';
import { LoadingFrame } from '@/components/loading';
import { Map } from './Map';

//TODO pull geolocation up into context wrapper and render map if location is successful
const MapWrapper = () => {
    const geolocation = useGeolocation();
    const { response: geoCodeResponse, error: geoCodeError } = useJson(
        'https://nominatim.openstreetmap.org/reverse',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lat: geolocation.latitude,
                lon: geolocation.longitude,
            }),
        }
    );
    const { response: covidResponse, error: covidError } = useJson(
        '/api/covid/countries/usa'
    );
    const center: number[] = [geolocation.latitude, geolocation.longitude];

    if (!geoCodeResponse) return <LoadingFrame />;
    if (geolocation.error || covidError || geoCodeError)
        return <p>Error determining your location.</p>;

    return <Map center={center} />;
};

export default MapWrapper;
