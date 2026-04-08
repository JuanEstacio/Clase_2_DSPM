import { useState } from "react";
import { Device } from "@capacitor/device";

const useDevice = () => {

  const [info, setInfo] = useState<any>(null);

  const getInfo = async () => {
    const data = await Device.getInfo();
    setInfo(data);
  };

  return { info, getInfo };
};

export default useDevice;