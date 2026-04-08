import { useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

const useGeolocation = () => {

  const [position, setPosition] = useState<any>(null);

  const getLocation = async () => {
    const coords = await Geolocation.getCurrentPosition();
    setPosition(coords);
  };

  return { position, getLocation };
};

export default useGeolocation;