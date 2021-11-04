import { useState, useEffect } from "react";
import { COLOR_MODE_KEY } from "../constants";

function useColorMode() {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const initialColorValue = document.body.className;

    rawSetColorMode(initialColorValue);
  }, []);

  function setColorMode(newValue) {
    // Update localStorage
    localStorage.setItem(COLOR_MODE_KEY, newValue);

    // Update properties
    document.body.className = newValue;

    // Update React color-mode state
    rawSetColorMode(newValue);
  }

  return [colorMode, setColorMode];
}

export default useColorMode;
