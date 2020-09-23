import React from "react";
import { H2 } from "../../components/Headings/Headings";
import { Topic } from "../../components/Topic/Topic";
import { DisplayWrapper } from "../../layouts/DisplayWrapper/DisplayWrapper";
import { Hero } from "../../layouts/Hero/Hero";

export const Home = () => {
  return (
    <DisplayWrapper>
      <Hero />

      <main className="mt-20">
        <H2>Select a topic</H2>
        <p className="text-gray-600">
          Select a topic to get started with creating your own dynamic
          worksheets
        </p>

        <div className="flex flex-wrap mt-5">
          <Topic />
        </div>
      </main>
    </DisplayWrapper>
  );
};
