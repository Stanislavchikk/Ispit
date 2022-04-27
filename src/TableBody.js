import React, { memo } from "react";

export default memo(({ className, children }) => {
  return <tbody className={`table__body ${className}`}>{children}</tbody>;
});
