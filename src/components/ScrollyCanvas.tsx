"use client";

import { useEffect, useRef, useState } from "react";
import { type MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

const FRAME_COUNT = 89;

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const numStr = String(i).padStart(4, "0");
      img.src = `/sequence/${numStr}.webp`;
      // We push in order
      loadedImages.push(img);
    }

    // Wait for all to load, but we can do a naive check for simplicity:
    const checkLoaded = setInterval(() => {
      let isComplete = true;
      for (const img of loadedImages) {
        if (!img.complete || img.naturalHeight === 0) {
          isComplete = false;
        }
      }
      if (isComplete) {
        setImages(loadedImages);
        setLoaded(true);
        clearInterval(checkLoaded);
      }
    }, 100);

    return () => clearInterval(checkLoaded);
  }, []);

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded && images.length > 0) {
      renderFrame(Math.round(latest), images);
    }
  });

  const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas || !imgs[index]) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[index];
    const { innerWidth, innerHeight } = window;

    // Resize high-dpi canvas (optional, but innerWidth is okay for this)
    if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    }

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      // Fit to width
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Fit to height
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    // Performance: turn off image smoothing if it hurts perf, but usually fine
    ctx.imageSmoothingEnabled = true;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      if (loaded && images.length > 0) {
        renderFrame(Math.round(frameIndex.get()), images);
      }
    };
    window.addEventListener("resize", handleResize);

    if (loaded && images.length > 0) {
      renderFrame(Math.round(frameIndex.get()), images);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [loaded, images, frameIndex]);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80 z-0 pointer-events-none" />
    </>
  );
}
