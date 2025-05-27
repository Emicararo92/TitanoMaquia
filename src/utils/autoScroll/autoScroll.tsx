/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useCallback } from "react";

export const useAutoScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [isScrolling, setIsScrolling] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const toggleScroll = useCallback(() => {
    setIsScrolling((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    let interval: NodeJS.Timeout;

    if (isScrolling && !isMouseOver) {
      interval = setInterval(() => {
        if (
          container.scrollTop + container.clientHeight <
          container.scrollHeight
        ) {
          container.scrollTop += 1;
        } else {
          setIsScrolling(false);
        }
      }, 30);
      setScrollInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isScrolling, isMouseOver, ref]);

  return {
    isScrolling,
    toggleScroll,
    setIsMouseOver,
  };
};
