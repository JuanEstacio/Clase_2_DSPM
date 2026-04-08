import { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";

const useCamera = () => {

  const [photo, setPhoto] = useState<string | null>(null);

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl
    });

    setPhoto(image.dataUrl!);
  };

  return { photo, takePhoto };
};

export default useCamera;