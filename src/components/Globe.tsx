import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Premium animated 3D-feeling globe built with SVG.
 * - Rotating meridians/parallels
 * - Orbiting nodes connected by arcs (network visualization)
 * - Mouse-reactive tilt
 */
export function Globe({ size = 520 }: { size?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(smx, [-1, 1], [-18, 18]);
  const rotateX = useTransform(smy, [-1, 1], [12, -12]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrap.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx.set(Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2))));
      my.set(Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2))));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  // Network nodes (lat/long on a unit sphere)
  const nodes = [
    { lat: 40, lng: -74, label: "NYC" },
    { lat: 51, lng: 0, label: "LDN" },
    { lat: 35, lng: 139, label: "TYO" },
    { lat: -33, lng: 151, label: "SYD" },
    { lat: 19, lng: 72, label: "BOM" },
    { lat: 25, lng: 55, label: "DXB" },
    { lat: -23, lng: -46, label: "SAO" },
    { lat: 1, lng: 103, label: "SGP" },
    { lat: 48, lng: 2, label: "PAR" },
  ];

  const R = size / 2 - 10;
  const project = (lat: number, lng: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -R * Math.sin(phi) * Math.cos(theta);
    const z = R * Math.sin(phi) * Math.sin(theta);
    const y = R * Math.cos(phi);
    return { x, y, z };
  };

  return (
    <motion.div
      ref={wrap}
      style={{ perspective: 1200 }}
      className="relative mx-auto"
    >
      <motion.div
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            width: size, height: size,
            background: "radial-gradient(closest-side, rgba(47,139,255,0.35), transparent 70%)",
          }}
        />

        {/* Sphere */}
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="relative">
          <defs>
            <radialGradient id="sphereFill" cx="35%" cy="30%">
              <stop offset="0%" stopColor="#1a2540" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#06080f" stopOpacity="1" />
              <stop offset="100%" stopColor="#000" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="ringStroke" x1="0" x2="1">
              <stop offset="0%" stopColor="#2f8bff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#5ea8ff" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="nodeGlow">
              <stop offset="0%" stopColor="#9ec6ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#2f8bff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={size/2} cy={size/2} r={R} fill="url(#sphereFill)" stroke="rgba(255,255,255,0.08)" />

          {/* Rotating meridians */}
          <g style={{ transformOrigin: `${size/2}px ${size/2}px` }} className="animate-spin-slow">
            {Array.from({ length: 9 }).map((_, i) => {
              const rx = R * Math.abs(Math.cos((i / 9) * Math.PI));
              return (
                <ellipse
                  key={`m-${i}`}
                  cx={size/2} cy={size/2} rx={rx} ry={R}
                  fill="none" stroke="url(#ringStroke)" strokeWidth="0.6" opacity="0.55"
                />
              );
            })}
          </g>

          {/* Parallels */}
          <g>
            {Array.from({ length: 7 }).map((_, i) => {
              const y = (i + 1) * (R * 2) / 8;
              const ry = R * 0.06 + i * 1.5;
              const rx = Math.sqrt(Math.max(0, R*R - Math.pow(y - R, 2)));
              return (
                <ellipse key={`p-${i}`} cx={size/2} cy={size/2 - R + y} rx={rx} ry={ry/2}
                  fill="none" stroke="rgba(120,160,220,0.16)" strokeWidth="0.5" />
              );
            })}
          </g>

          {/* Counter-rotating accent ring */}
          <g style={{ transformOrigin: `${size/2}px ${size/2}px` }} className="animate-spin-reverse">
            <ellipse cx={size/2} cy={size/2} rx={R * 1.05} ry={R * 0.35}
              fill="none" stroke="rgba(47,139,255,0.45)" strokeWidth="0.8" strokeDasharray="2 6" />
          </g>

          {/* Network arcs */}
          <g>
            {nodes.map((a, i) =>
              nodes.slice(i + 1).map((b, j) => {
                const pa = project(a.lat, a.lng);
                const pb = project(b.lat, b.lng);
                if (pa.z < -R * 0.4 && pb.z < -R * 0.4) return null;
                const mxp = (pa.x + pb.x) / 2;
                const myp = (pa.y + pb.y) / 2;
                const dist = Math.hypot(pa.x - pb.x, pa.y - pb.y);
                const curve = dist * 0.25;
                return (
                  <path
                    key={`arc-${i}-${j}`}
                    d={`M ${size/2 + pa.x} ${size/2 - pa.y} Q ${size/2 + mxp} ${size/2 - myp - curve} ${size/2 + pb.x} ${size/2 - pb.y}`}
                    fill="none"
                    stroke="rgba(94,168,255,0.22)"
                    strokeWidth="0.7"
                  />
                );
              })
            )}
          </g>

          {/* Nodes */}
          {nodes.map((n, i) => {
            const p = project(n.lat, n.lng);
            const front = p.z > -R * 0.2;
            return (
              <g key={i} opacity={front ? 1 : 0.25}>
                <circle cx={size/2 + p.x} cy={size/2 - p.y} r="8" fill="url(#nodeGlow)" />
                <circle cx={size/2 + p.x} cy={size/2 - p.y} r="2.4" fill="#cfe2ff" />
              </g>
            );
          })}

          {/* Specular highlight */}
          <ellipse cx={size * 0.36} cy={size * 0.30} rx={R * 0.35} ry={R * 0.18}
            fill="rgba(255,255,255,0.06)" />
        </svg>

        {/* Outer pulse rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full border border-[var(--color-electric)]/40 animate-pulse-ring"
            style={{ width: size, height: size }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
