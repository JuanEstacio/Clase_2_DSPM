import { useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

const useGeolocationMission = () => {

  const [start, setStart] = useState<any>(null);

  const startTracking = async () => {
    const pos = await Geolocation.getCurrentPosition();
    setStart(pos.coords);
  };

  const checkDistance = async () => {
    const pos = await Geolocation.getCurrentPosition();

    const dx = pos.coords.latitude - start.latitude;
    const dy = pos.coords.longitude - start.longitude;

    const distance = Math.sqrt(dx * dx + dy * dy) * 111000;

    return distance > 30;
  };

  return { startTracking, checkDistance };
};

export default useGeolocationMission;