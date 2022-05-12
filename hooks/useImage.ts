import React from "react";
import useIsMounted from "./useIsMounted";

const useImage = ({ src }: any) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const isMounted = useIsMounted();

  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (isMounted.current) {
        setLoaded(true);
      }
    };
  }, [src, isMounted]);

  return {
    loaded,
  };
};

export default useImage;
