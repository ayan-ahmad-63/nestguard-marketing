import markImage from "@/imports/logo-mark.png";
import rowImage from "@/imports/logo-row.png";
import stackedImage from "@/imports/logo-stacked.png";

// In Next.js, imported images are objects with a .src property
const markSrc = typeof markImage === "string" ? markImage : (markImage as any).src;
const rowSrc = typeof rowImage === "string" ? rowImage : (rowImage as any).src;
const stackedSrc = typeof stackedImage === "string" ? stackedImage : (stackedImage as any).src;

/**
 * Brand assets are transparent PNGs whose artwork sits inside a large square
 * canvas with wide empty margins. The values below are the measured
 * bounding boxes of the actual artwork (as fractions of the canvas),
 * so we crop the padding away and size the logo to the artwork, not the canvas.
 */
const SPEC = {
  mark: { src: markSrc, minx: 0.2324, miny: 0.2305, cw: 0.5400, ch: 0.5732 },
  row: { src: rowSrc, minx: 0.0684, miny: 0.3799, cw: 0.8711, ch: 0.2578 },
  stacked: { src: stackedSrc, minx: 0.2148, miny: 0.2822, cw: 0.5723, ch: 0.3643 },
} as const;

interface MarkProps {
  size?: number;
  className?: string;
}

/** Fingerprint-nest mark only. */
export function LogoMark({ size = 32, className = "" }: MarkProps) {
  const s = SPEC.mark;
  const aspect = s.cw / s.ch;
  const artH = size;
  const artW = size * aspect;
  const imgH = artH / s.ch;
  const imgW = artW / s.cw;
  const offsetX = (size - artW) / 2; // Center horizontally if artwork isn't perfectly square
  
  return (
    <div
      role="img"
      aria-label="NestGuard Logo Mark"
      className={`relative overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={s.src}
        alt="NestGuard Logo Mark"
        style={{
          position: "absolute",
          width: imgW,
          height: imgH,
          left: -s.minx * imgW + offsetX,
          top: -s.miny * imgH,
          maxWidth: "none",
        }}
      />
    </div>
  );
}

interface LockupProps {
  /** rendered height of the artwork in px */
  height?: number;
  /** "stacked" = mark over wordmark; "row" = horizontal lockup */
  variant?: "row" | "stacked";
  className?: string;
}

/** Full logo lockup. */
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
