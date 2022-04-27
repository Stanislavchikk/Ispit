import React, { memo } from "react";

export default memo(({ className, children }) => {
  return <thead className={`table__head ${className}`}>{children}</thead>;
});
