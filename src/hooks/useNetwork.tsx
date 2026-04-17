import { useEffect, useState } from "react";
import { Network } from "@capacitor/network";

const useNetwork = () => {

  const [online, setOnline] = useState(true);

  useEffect(() => {

    let listener: any;

    const setup = async () => {

      const status = await Network.getStatus();
      setOnline(status.connected);

      listener = await Network.addListener("networkStatusChange", status => {
        setOnline(status.connected);
      });

    };

    setup();

    return () => {
      if (listener) {
        listener.remove();
      }
    };

  }, []);

  return { online };
};

export default useNetwork;