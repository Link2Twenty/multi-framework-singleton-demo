import { TypedEventTarget } from "./typed-event-target";

export interface Toast {
  id: string;
  message: string;
  type: "info" | "success" | "loading" | "error";
  action?: {
    label: string;
    callback: () => void;
  };
}

type ToastEvents = {
  changed: void;
};

class ToastManager extends TypedEventTarget<ToastEvents> {
  private _toasts: Toast[] = [];
  private _timers = new Map<string, number>();

  add = (toast: Omit<Toast, "id"> & { id?: string }, duration = 3000) => {
    const id = toast.id ?? Math.random().toString(36).substring(2, 9);
    this.clearTimer(id);

    const newToast = { ...toast, id };
    const exists = this.toasts.some((t) => t.id === id);

    if (exists) {
      this.toasts = this.toasts.map((t) => (t.id === id ? newToast : t));
    } else {
      this.toasts = [...this.toasts, newToast];
    }

    if (duration > 0) {
      const timer = setTimeout(
        () => this.remove(id),
        duration,
      ) as unknown as number;
      this._timers.set(id, timer);
    }

    return id;
  };

  remove = (id: string) => {
    this.clearTimer(id);
    const index = this.toasts.findIndex(({ id: _id }) => _id === id);

    if (index >= 0) {
      this.toasts = this.toasts.filter(({ id: _id }) => _id !== id);
    }
  };

  private clearTimer(id: string) {
    if (this._timers.has(id)) {
      clearTimeout(this._timers.get(id));
      this._timers.delete(id);
    }
  }

  // Getters and Setters
  get toasts() {
    return this._toasts;
  }

  private set toasts(value: Toast[]) {
    this._toasts = [...value];
    this.dispatchEvent("changed");
  }
}

export const toastManager = new ToastManager();
