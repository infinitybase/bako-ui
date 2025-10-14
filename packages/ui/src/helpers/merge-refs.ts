export function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ref as React.MutableRefObject<T>).current = value;
      }
    });
  };
}
