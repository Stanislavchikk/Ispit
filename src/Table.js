import React, { memo } from "react";

export default memo(({ className, size, stickyHead, children }) => {
  return (
    <table className={`table ${size} ${stickyHead} ${className}`}>
      {children}
    </table>
  );
});
