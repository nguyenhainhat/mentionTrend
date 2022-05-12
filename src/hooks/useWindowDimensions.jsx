/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable padding-line-between-statements */
// eslint-disable-next-line object-curly-spacing
import react from "react";

function getWindowDimensions() {
  // eslint-disable-next-line object-curly-spacing
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = react.useState(
    getWindowDimensions()
  );

  react.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
