import React, { memo } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export default memo(({ direction, children, ...rest }) => {
  console.log(direction);
  return (
    <span className={"cell-direction"} {...rest}>
      {children}
      {direction === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
    </span>
  );
});
