import { useJson } from '@/hooks/useJson';
import { LoadingFrame } from '@/components/loading';
import { Map } from './Map';
import { useGeolocated } from 'react-geolocated';
import { DropDown } from '@/components/inputs';

const MapWrapper = () => {
    const {
        coords,
        isGeolocationAvailable,
        isGeolocationEnabled,
        positionError,
    } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });
    const { response: geoCodeResponse, error: geoCodeError } = useJson(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords?.latitude}&lon=${coords?.longitude}`
    );

    const { response: covidResponse, error: covidError } = useJson(
        `/api/covid/states/${geoCodeResponse?.address?.state?.toLowerCase()}`
    );

    const { response: countryResponse } = useJson('/data/countries.json');

    if (!coords?.latitude || !coords?.longitude) return <LoadingFrame />;

    const center: number[] = [coords?.latitude, coords?.longitude];

    if (positionError || covidError || geoCodeError)
        return <p>Error determining your location.</p>;

    return (
        <>
            <DropDown values={countryResponse.countries} />
            <Map
                center={center}
                popupText={`There are ${covidResponse?.active} active COVID cases in ${covidResponse?.state} today.`}
            />
        </>
    );
};

export default MapWrapper;
