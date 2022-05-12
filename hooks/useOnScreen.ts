import { RefObject, useEffect, useState } from "react";
const useOnScreen = (ref: RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return isIntersecting;
};
export default useOnScreen;
