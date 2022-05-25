import { useJson } from '@/hooks/useJson';
import { Map } from './Map';

const MapWrapper = () => {
    const { response, error } = useJson('/api/covid/countries/usa');
    let center: number[] = [38, -97]; //TODO make center configurable

    if (response && Object.keys(response).length)
        center = [response?.countryInfo.lat, response?.countryInfo.long];

    if (error) return null;

    return <Map center={center} />;
};

export default MapWrapper;
