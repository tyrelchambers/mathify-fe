import React from "react";
import "./EqPreview.css";

import isEmpty from "../../helpers/isEmpty";

export const EqPreview = ({ state }) => {
  if (isEmpty(state)) return null;

  return (
    <div className="preview-wrapper">
      {state.map((eq, id) => (
        <div className="flex equation-item" key={id}>
          {eq.symbol}
          <div className="flex digit-list">
            {eq.digits.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
