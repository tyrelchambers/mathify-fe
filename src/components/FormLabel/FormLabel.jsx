import React, { useState } from "react";
import "../../forms/form.css";
import Tooltip from "../Tooltip/Tooltip";
export const FormLabel = ({ forName, label, hasTooltip, toolTipText }) => {
  const [tooltipRef, setTooltipRef] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <label
      htmlFor={forName}
      className="form-label relative"
      ref={(ref) => setTooltipRef(ref)}
    >
      {label}
      {hasTooltip && (
        <>
          <i
            className="fas fa-question-circle ml-4"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          ></i>
          {tooltipVisible && (
            <Tooltip tooltipRef={tooltipRef}>{toolTipText}</Tooltip>
          )}
        </>
      )}
    </label>
  );
};
