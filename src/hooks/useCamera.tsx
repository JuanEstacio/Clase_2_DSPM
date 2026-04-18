import { Camera, CameraResultType } from "@capacitor/camera";

const useCamera = () => {

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri
    });

    return photo.webPath;
  };

  return { takePhoto };
};

export default useCamera;