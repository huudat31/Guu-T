"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

const EDGE_ZONE_PX = 22;
const MIN_THUMB_HEIGHT = 56;

export default function EdgeScrollbar() {
  const [visible, setVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(MIN_THUMB_HEIGHT);
  const [viewportHeight, setViewportHeight] = useState(0);

  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartYRef = useRef(0);
  const dragStartScrollYRef = useRef(0);

  useEffect(() => {
    const updateThumbMetrics = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const viewport = window.innerHeight;
      const trackHeight = viewport;
      const safeMaxScroll = Math.max(1, scrollHeight - viewport);
      const ratio = viewport / Math.max(viewport, scrollHeight);
      const nextThumbHeight = Math.max(MIN_THUMB_HEIGHT, Math.round(trackHeight * ratio));
      const maxThumbTop = Math.max(0, trackHeight - nextThumbHeight);
      const progress = window.scrollY / safeMaxScroll;
      const nextThumbTop = Math.round(progress * maxThumbTop);

      setThumbHeight(nextThumbHeight);
      setThumbTop(nextThumbTop);
      setViewportHeight(viewport);
    };

    const showTemporarily = () => {
      setVisible(true);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
      if (!isDragging) {
        hideTimerRef.current = setTimeout(() => setVisible(false), 450);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (isDragging) return;
      const nearRightEdge = window.innerWidth - event.clientX <= EDGE_ZONE_PX;
      if (nearRightEdge) {
        showTemporarily();
      }
    };

    const handleScroll = () => {
      updateThumbMetrics();
      if (visible || isDragging) {
        showTemporarily();
      }
    };

    const handleResize = () => {
      updateThumbMetrics();
    };

    updateThumbMetrics();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, [isDragging, visible]);

  const onThumbPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dragStartYRef.current = event.clientY;
    dragStartScrollYRef.current = window.scrollY;
    setVisible(true);
    setIsDragging(true);

    const pointerId = event.pointerId;
    event.currentTarget.setPointerCapture(pointerId);

    const onPointerMove = (moveEvent: PointerEvent) => {
      const deltaY = moveEvent.clientY - dragStartYRef.current;
      const trackHeight = window.innerHeight;
      const maxThumbTop = Math.max(1, trackHeight - thumbHeight);
      const maxDocumentScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollDelta = (deltaY / maxThumbTop) * maxDocumentScroll;
      window.scrollTo({ top: dragStartScrollYRef.current + scrollDelta, behavior: "auto" });
    };

    const onPointerUp = () => {
      setIsDragging(false);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
      hideTimerRef.current = setTimeout(() => setVisible(false), 300);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  };

  const topOffset = Math.min(thumbTop, Math.max(0, viewportHeight - thumbHeight));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-0 z-[70] w-3"
      style={{ opacity: visible || isDragging ? 1 : 0, transition: "opacity 220ms ease" }}
    >
      <button
        type="button"
        aria-label="Keo de cuon trang"
        className="pointer-events-auto absolute right-0 w-2 rounded-full"
        style={{
          top: `${topOffset}px`,
          height: `${thumbHeight}px`,
          background: "rgba(255, 255, 255, 0.35)",
          boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.08)",
          touchAction: "none",
          transition: isDragging ? "none" : "background-color 180ms ease",
        }}
        onPointerDown={onThumbPointerDown}
      />
    </div>
  );
}
