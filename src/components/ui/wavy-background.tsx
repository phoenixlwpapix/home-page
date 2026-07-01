import { useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const DEFAULT_WAVE_COLORS = [
  "#38bdf8",
  "#818cf8",
  "#c084fc",
  "#e879f9",
  "#22d3ee",
];

type WavyBackgroundSpeed = "slow" | "fast";

interface WavyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: WavyBackgroundSpeed;
  waveOpacity?: number;
  containerClassName?: string;
}

export default function WavyBackground({
  children,
  className,
  containerClassName,
  colors = DEFAULT_WAVE_COLORS,
  waveWidth = 48,
  backgroundFill = "#05070d",
  blur = 12,
  speed = "fast",
  waveOpacity = 0.55,
  ...props
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const velocity = speed === "fast" ? 0.016 : 0.007;
    let width = 0;
    let height = 0;
    let animationFrame: number | undefined;
    let time = 0;

    const resize = () => {
      const { width: rectWidth, height: rectHeight } =
        canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = rectWidth;
      height = rectHeight;
      canvas.width = Math.floor(rectWidth * pixelRatio);
      canvas.height = Math.floor(rectHeight * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawWave = (
      color: string,
      layerIndex: number,
      phase: number,
      amplitude: number
    ) => {
      context.beginPath();
      context.lineWidth = waveWidth + layerIndex * 8;
      context.strokeStyle = color;
      context.globalAlpha = waveOpacity;
      context.shadowColor = color;
      context.shadowBlur = blur * 2;

      const baseY =
        height * 0.5 + (layerIndex - (colors.length - 1) / 2) * height * 0.075;

      for (let x = -waveWidth; x <= width + waveWidth; x += 10) {
        const y =
          baseY +
          Math.sin(x * 0.004 + phase + layerIndex * 0.7) * amplitude +
          Math.sin(x * 0.009 - phase * 0.65) * amplitude * 0.42;

        if (x === -waveWidth) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }

      context.stroke();
    };

    const render = () => {
      context.globalCompositeOperation = "source-over";
      context.globalAlpha = 1;
      context.shadowBlur = 0;
      context.fillStyle = backgroundFill;
      context.fillRect(0, 0, width, height);

      context.globalCompositeOperation = "lighter";
      context.filter = blur > 0 ? `blur(${blur}px)` : "none";

      const amplitude = Math.max(height * 0.14, 72);
      colors.forEach((color, index) => {
        drawWave(color, index, time + index * 0.45, amplitude);
      });

      context.filter = "none";

      if (!reducedMotion) {
        time += velocity;
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    resize();
    render();

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) {
        render();
      }
    });

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [backgroundFill, blur, colors, speed, waveOpacity, waveWidth]);

  return (
    <div
      className={cn("relative size-full overflow-hidden", containerClassName)}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
