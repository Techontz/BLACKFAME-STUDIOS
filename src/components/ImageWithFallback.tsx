import { useState, type ImgHTMLAttributes, type ReactNode } from "react";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback: ReactNode;
}

// Renders `fallback` instead of a broken-image icon when `src` fails to load.
export default function ImageWithFallback({
  fallback,
  src,
  ...props
}: ImageWithFallbackProps) {
  const [failedSrc, setFailedSrc] = useState<string | undefined>();

  if (!src || failedSrc === src) return <>{fallback}</>;

  return <img src={src} onError={() => setFailedSrc(src)} {...props} />;
}
