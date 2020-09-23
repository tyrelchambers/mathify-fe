import React from "react";
import { useParams } from "react-router-dom";
import { H2 } from "../../components/Headings/Headings";
import { acceptedEquationRoutes } from "../../routes/accepted.routes";
import { DisplayWrapper } from "../DisplayWrapper/DisplayWrapper";

export const EquationWrapper = () => {
  const { equation } = useParams();

  if (!acceptedEquationRoutes.includes(equation)) {
    return null;
  }

  return (
    <DisplayWrapper>
      <div className="p-4 bg-gray-100 rounded-lg flex justify-center shadow-md">
        <H2 className="capitalize text-red-500">{equation}</H2>
      </div>
    </DisplayWrapper>
  );
};
