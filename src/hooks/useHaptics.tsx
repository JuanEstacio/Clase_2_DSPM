import { Haptics, ImpactStyle } from "@capacitor/haptics";

const useHaptics = () => {

  const vibrate = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  return { vibrate };
};

export default useHaptics;