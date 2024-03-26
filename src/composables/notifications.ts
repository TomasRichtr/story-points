import { useToast } from "vue-toastification";

export const useNotifications = () => {
  const toast = useToast();

  const notifySuccess = (message: string) => {
    toast.success(message);
  };

  const notifyError = (message: string) => {
    toast.error(message);
  };

  return {
    notifySuccess,
    notifyError
  };
};
