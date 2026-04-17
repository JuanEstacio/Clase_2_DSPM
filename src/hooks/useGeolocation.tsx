import { useState } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

const useGeolocation = () => {

  const [position, setPosition] = useState<any>(null);
  let watchId: any = null;

  const startTracking = async () => {

    await Haptics.impact({ style: ImpactStyle.Medium });

    watchId = await Geolocation.watchPosition({}, (pos) => {
      if (pos) {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      }
    });

  };

  const stopTracking = async () => {
    if (watchId) {
      await Geolocation.clearWatch({ id: watchId });
    }
  };

  return { position, startTracking, stopTracking };
};

export default useGeolocation;