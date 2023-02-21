import { useRef, useEffect } from "react";

const useInputFoucs = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return inputRef;
};

export default useInputFoucs;
