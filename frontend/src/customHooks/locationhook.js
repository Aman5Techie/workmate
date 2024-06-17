import { useEffect, useState } from "react";

export const useUserLocation = () => {
  const [location, setLocation] = useState(null);
  const [data, setdata] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude: latitude,
            longitude: longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    async function getUserData() {
      const _data = await fetch(
        `https://us1.locationiq.com/v1/reverse?key=${
          import.meta.env.REACT_APP_APIKEY
        }&lat=${location.latitude}&lon=${location.longitude}&format=json&`
      );
      const cuurentData = await _data.json();
      setdata(cuurentData);
    }
    getUserData();
  }, [location]);

  if (data != null) {
    return data;
  }
};
