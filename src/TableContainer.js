import React, { memo } from "react";

export default memo(({ stickyHeader, className, children }) => {
  return (
    <div className={`table-container ${stickyHeader} ${className}`}>
      {children}
    </div>
  );
});
