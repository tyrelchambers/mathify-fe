import React, { useEffect } from "react";

export const EqPreview = ({ state }) => {
  return <div>{JSON.stringify(state)}</div>;
};
