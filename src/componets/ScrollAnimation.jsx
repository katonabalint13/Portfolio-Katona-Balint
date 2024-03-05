import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

function ScrollAnimation({ children, result }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (inView) {
      gsap.to(element, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(element, {
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <div className={`${result}`} ref={elementRef}>
        {children}
      </div>
    </div>
  );
}

export default ScrollAnimation;
