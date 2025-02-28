import React, { useState, useEffect } from "react";

const WandCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <img
      src="/assets/cursor.png" // Ensure this image exists in the public/assets folder
      alt="wand cursor"
      className="fixed w-12 pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-20%, -10%) rotate(-30deg)",
      }}
    />
  );
};

export default WandCursor;
