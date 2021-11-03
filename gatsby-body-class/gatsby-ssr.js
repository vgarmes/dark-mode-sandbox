import React from "react"
import { COLOR_MODE_KEY } from "./src/constants"

function setColorsByTheme() {
  const colorModeKey = "🔑"

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = "light"

  const hasUsedToggle = typeof persistedPreference === "string"

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light"
  }

  document.body.className = colorMode
}

const ScriptTag = () => {
  const boundFn = String(setColorsByTheme).replace("🔑", COLOR_MODE_KEY)

  let calledFunction = `(${boundFn})()`

  //calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  //setHeadComponents(<FallbackStyles />)
  setPreBodyComponents(<ScriptTag key="script-tag" />)
}
