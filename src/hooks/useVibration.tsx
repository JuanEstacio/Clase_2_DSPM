import { Haptics, ImpactStyle } from "@capacitor/haptics";

const useVibration = () => {

  const vibrate = async () => {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  };

  return { vibrate };
};

export default useVibration;