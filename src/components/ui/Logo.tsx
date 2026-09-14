import markImage from "@/imports/Untitled_design__1_.png";
import lockupImage from "@/imports/Untitled_design__2_.png";

// In Next.js, imported images are objects with a .src property
const markSrc = typeof markImage === "string" ? markImage : (markImage as any).src;
const lockupSrc = typeof lockupImage === "string" ? lockupImage : (lockupImage as any).src;

/**
 * Brand assets are transparent PNGs whose artwork sits inside a large square
 * canvas with wide empty margins. The values below are the measured
 * bounding boxes of the actual artwork (as fractions of the 2000px canvas),
 * so we crop the padding away and size the logo to the artwork, not the canvas.
 */
const SPEC = {
  row: { src: lockupSrc, minx: 0.069, miny: 0.38, cw: 0.869, ch: 0.256 },
  stacked: { src: markSrc, minx: 0.216, miny: 0.282, cw: 0.57, ch: 0.364 },
} as const;

interface MarkProps {
  size?: number;
  className?: string;
}

/** Fingerprint-nest mark only — cropped out of the stacked lockup. */
export function LogoMark({ size = 32, className = "" }: MarkProps) {
  return (
    <div
      role="img"
      aria-label="NestGuard Logo Mark"
      className={`shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${markSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "420%",
        backgroundPosition: "50% 38%",
      }}
    />
  );
}

interface LockupProps {
  /** rendered height of the artwork in px */
  height?: number;
  /** "stacked" = mark over wordmark; "row" = horizontal lockup */
  variant?: "row" | "stacked";
  className?: string;
}

/** Full logo lockup, cropped tight to the artwork (no canvas padding). */
export function LogoLockup({ height = 44, variant = "row", className = "" }: LockupProps) {
  const s = SPEC[variant];
  const aspect = s.cw / s.ch;
  const artW = height * aspect;
  const imgW = artW / s.cw;
  const imgH = height / s.ch;
  return (
    <div
      role="img"
      aria-label="NestGuard"
      className={`relative overflow-hidden shrink-0 ${className}`}
      style={{ width: artW, height }}
    >
      <img
        src={s.src}
        alt="NestGuard"
        style={{
          position: "absolute",
          width: imgW,
          height: imgH,
          left: -s.minx * imgW,
          top: -s.miny * imgH,
          maxWidth: "none",
        }}
      />
    </div>
  );
}

export default LogoLockup;
