import { useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

const useGeolocation = () => {

  const [startPos, setStartPos] = useState<any>(null);

  const getCurrentPosition = async () => {
    const pos = await Geolocation.getCurrentPosition();
    return {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    };
  };

  const startTracking = async () => {
    const pos = await getCurrentPosition();
    setStartPos(pos);
  };

  const getDistance = async () => {
    if (!startPos) return 0;

    const current = await getCurrentPosition();

    const dx = current.lat - startPos.lat;
    const dy = current.lng - startPos.lng;

    // Aproximación simple (suficiente para el parcial)
    return Math.sqrt(dx * dx + dy * dy) * 111000;
  };

  return { startTracking, getDistance };
};

export default useGeolocation;