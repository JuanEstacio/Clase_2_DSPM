import { Haptics } from "@capacitor/haptics";

const useStayMission = () => {

  const startStay = async () => {

    await new Promise(resolve => setTimeout(resolve, 10000));

    await Haptics.vibrate();

    return true;
  };

  return { startStay };
};

export default useStayMission;