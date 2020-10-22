import { useRef, useEffect } from 'react';
export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) element.current.addEventListener('click', onClick);
    return () => {
      if (element.current) element.current.addEventListener('click', onClick);
    };
  }, [onClick]);
  if (typeof onClick !== 'function') return;
  return element;
};
