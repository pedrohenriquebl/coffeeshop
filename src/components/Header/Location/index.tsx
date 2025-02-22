import { useState, useEffect } from 'react';

interface LocationData {
    locality: string,
    principalSubdivision: string,
}

export function CurrentLocation() {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [state, setState] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {                
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            })
        }
    }, [])

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            getCurrentLocationByCoordenades(latitude, longitude)
        }        
    }, [latitude, longitude]) 

    async function getCurrentLocationByCoordenades(latitude: number | null, longitude: number | null) {
        setLoading(true)
        
        try {
            const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
            );    
            const data: LocationData = await response.json();
    
            setCity(data.locality);
            setState(data.principalSubdivision);
        } catch (err) {
            console.error('Error:', err);
            setCity("Não encontrada")
            setState("")
        } finally {
            setLoading(false)
        }
    }

    return (       
        <span>
            { loading ? "" : `${city}, ${state}`}
        </span>        
    )
}