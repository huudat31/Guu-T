import { useEffect, useState } from "react";

export function useDelay(delayMs: number, trigger: boolean = true) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    const timer = setTimeout(() => {
      setIsDone(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, trigger]);

  return isDone;
}
