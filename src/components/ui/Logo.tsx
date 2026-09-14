interface MarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 32, className = "" }: MarkProps) {
  return (
    <img
      src="/logo-mark.png"
      alt="NestGuard Logo Mark"
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

interface LockupProps {
  height?: number;
  variant?: "row" | "stacked";
  className?: string;
}

export function LogoLockup({ height = 44, variant = "row", className = "" }: LockupProps) {
  const src = variant === "row" ? "/logo-row.png" : "/logo-stacked.png";
  return (
    <img
      src={src}
      alt="NestGuard"
      className={`shrink-0 object-contain ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}

export default LogoLockup;
