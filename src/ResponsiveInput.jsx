import {useState,useEffect,useLayoutEffect,useRef} from 'react'




const ResponsiveInput = ({ onClear, ...props }) => {
  const el = useRef();
  const [w, setW] = useState(0);
  const measure = () => setW(el.current.offsetWidth);
  if(w === 0){
    setW(100)
  }
  
  // useLayoutEffect(() => {
  //   debugger
  //   measure()
  // }, []);
  useEffect(() => {
    debugger
    // don't take this too seriously, say it's a ResizeObserver
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  return (
    <label>
      <h1>{w}</h1>
      <input {...props} ref={el} />
      {w > 200 && <button onClick={onClear}>clear</button>}
    </label>
  );
};
export  default ResponsiveInput