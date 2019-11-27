import React from "react";

export function style(component, classes, inline = {}) {
  return React.cloneElement(component, {
    className: classes,
    style: inline
  });
}
