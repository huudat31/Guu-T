"use client";

import Image, { ImageProps } from "next/image";
import React, { useEffect, useMemo, useState } from "react";

interface Props extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallback?: string;
}

export default function RemoteImageWithFallback({ src, fallback = "/images/image-fallback.svg", ...rest }: Props) {
  const initialSrc = useMemo(() => {
    const trimmedSrc = typeof src === "string" ? src.trim() : "";
    return trimmedSrc || fallback;
  }, [src, fallback]);

  const [currentSrc, setCurrentSrc] = useState(initialSrc);

  useEffect(() => {
    setCurrentSrc(initialSrc);
  }, [initialSrc]);

  if (!initialSrc) {
    return null;
  }

  return (
    <Image
      {...rest}
      src={currentSrc}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
