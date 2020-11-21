import React from 'react';

const useTilt = (active) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

export default useTilt;
