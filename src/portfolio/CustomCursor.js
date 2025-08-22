import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
        
        cursorOutlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
      }
    };
    
    const handleMouseUp = () => {
        setIsClicked(false);
        if (cursorOutlineRef.current) {
            cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className={`fixed w-2 h-2 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 ${isClicked ? 'bg-cyan-300' : 'bg-teal-400'}`}
      ></div>
      <div 
        ref={cursorOutlineRef} 
        className={`fixed w-10 h-10 border-2 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${isClicked ? 'border-cyan-300' : 'border-teal-400'}`}
      ></div>
    </>
  );
};

// export default CustomCursor;
