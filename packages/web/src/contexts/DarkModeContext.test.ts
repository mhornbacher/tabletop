import { renderHook } from '../test-utils'

import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";

describe("DarkModeContext", () => {
  it("should default to false", () => {

    const context = renderHook(() => useContext(DarkModeContext))

    expect(context.result.current.darkMode).toBe(false)
  })
})
