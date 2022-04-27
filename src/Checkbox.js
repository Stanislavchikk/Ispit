import React, { memo } from "react";

export default memo(
  ({ label, checked, onChange, className, align, margin, name }) => {
    return (
      <div className={`checkbox ${margin} ${className} ${align}`}>
        <label className={`checkbox__container`}>
          <input
            className={"checkbox-input"}
            name={name}
            type={"checkbox"}
            checked={checked}
            onChange={onChange}
          />
          <span className={"checkmark"} />
          <span className={"checkbox-label"}>{label}</span>
        </label>
      </div>
    );
  }
);
