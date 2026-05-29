import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      setHover(!!target.closest("a, button, [data-cursor='hover']"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:block transition-[width,height,opacity] duration-200"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          width: hover ? 44 : 10,
          height: hover ? 44 : 10,
          borderRadius: "9999px",
          background: "#fff",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          width: 36, height: 36, borderRadius: "9999px",
          border: "1px solid rgba(94,168,255,0.6)",
          opacity: visible ? (hover ? 0 : 0.5) : 0,
          transition: "transform 0.18s ease-out, opacity 0.2s",
        }}
      />
    </>
  );
}
