import React, { memo } from "react";

export default memo(({ hover, selected, className, children }) => {
  return (
    <tr className={`table-row ${hover} ${selected} ${className}`}>
      {children}
    </tr>
  );
});
