type EventListener<E extends Event> = (evt: E) => void;

interface EventListenerObject<E extends Event> {
  handleEvent(evt: CustomEvent<E>): void;
}

// The type of our listener receives the CustomEvent with our specific data
type TEL<E> =
  | EventListener<CustomEvent<E>>
  | EventListenerObject<CustomEvent<E>>;

export class TypedEventTarget<M extends Record<string, unknown>> {
  private readonly target = new EventTarget();

  addEventListener<K extends keyof M>(
    type: K & string,
    listener: TEL<M[K]>,
    options?: boolean | AddEventListenerOptions
  ) {
    // We cast to EventListenerOrEventListenerObject because the browser expects the base Event type
    this.target.addEventListener(
      type,
      listener as EventListenerOrEventListenerObject,
      options
    );
  }

  removeEventListener<K extends keyof M>(
    type: K & string,
    listener: TEL<M[K]>,
    options?: boolean | EventListenerOptions
  ) {
    this.target.removeEventListener(
      type,
      listener as EventListenerOrEventListenerObject,
      options
    );
  }

  // A helper to ensure we always dispatch a properly formatted CustomEvent
  dispatchEvent<K extends keyof M>(
    type: K & string,
    ...args: M[K] extends void ? [detail?: undefined] : [detail: M[K]]
  ) {
    const [detail] = args;

    return this.target.dispatchEvent(new CustomEvent(type, { detail }));
  }
}
