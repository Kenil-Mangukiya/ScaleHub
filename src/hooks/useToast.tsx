import { useState, useCallback } from "react";

export type ToastType = "success" | "error";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

let toastId = 0;

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const internalShowToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = `toast-${toastId++}`;
      const newToast: Toast = { id, message, type };

      setToasts((prev) => [...prev, newToast]);

      const timeout = window.setTimeout(() => {
        removeToast(id);
      }, 4000);

      return {
        id,
        dismiss: () => {
          window.clearTimeout(timeout);
          removeToast(id);
        },
      };
    },
    [removeToast],
  );

  return {
    toasts,
    showToast: (message: string, type?: ToastType) =>
      internalShowToast(message, type).id,
    removeToast,
  };
};
