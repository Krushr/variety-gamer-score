import { useState } from "react";

export function ToggleElement({
  children,
  hiddenButtonText = "show",
  visibleButtonText = "hide",
  initiallyVisible = false,
}) {
  const [visible, setVisible] = useState(initiallyVisible);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? visibleButtonText : hiddenButtonText}
      </button>
      {visible ? children : ""}
    </>
  );
}
