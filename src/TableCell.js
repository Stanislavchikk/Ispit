import React, { memo } from "react";

export default memo(({ align, size, className, children }) => {
  return (
    <td className={`table-row__cell ${align} ${size} ${className}`}>
      {children}
    </td>
  );
});
