import { Camera, CameraResultType } from "@capacitor/camera";

const useCameraMission = () => {

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri
    });

    return image.webPath;
  };

  return { takePhoto };
};

export default useCameraMission;