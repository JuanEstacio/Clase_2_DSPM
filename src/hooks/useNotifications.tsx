import { LocalNotifications } from "@capacitor/local-notifications";

const useNotifications = () => {

  const sendNotification = async (title: string, body: string) => {

    await LocalNotifications.requestPermissions();

    await LocalNotifications.schedule({
      notifications: [
        {
          title,
          body,
          id: Date.now()
        }
      ]
    });
  };

  return { sendNotification };
};

export default useNotifications;