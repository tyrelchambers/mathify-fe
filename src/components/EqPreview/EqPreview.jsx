import React, { useEffect } from "react";

export const EqPreview = ({ state }) => {
  useEffect(() => {}, [state]);
  return <div>{JSON.stringify(state)}</div>;
};
