import React from "react";
import useColorMode from "../hooks/useColorMode";

const DarkToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  if (!colorMode) {
    return null;
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={ev => {
          setColorMode(ev.target.checked ? "dark" : "light");
        }}
      />{" "}
      Dark
    </label>
  );
};

export default DarkToggle;
