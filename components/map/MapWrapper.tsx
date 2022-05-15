import { useEffect } from 'react';
import { useJson } from '@/hooks/useJson';
import { Map } from './Map';

const MapWrapper = () => {
    const { response, setUrl } = useJson();

    useEffect(() => {
        setUrl('/api/covid/countries/usa');
    }, [setUrl]);

    let center: number[] = [38, -97];

    if (response && Object.keys(response).length) {
        center = [response?.countryInfo.lat, response?.countryInfo.long];
    }

    return <Map center={center} />;
};

export default MapWrapper;
