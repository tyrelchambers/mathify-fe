import React from "react";
import { Link } from "react-router-dom";
import { topics } from "../../constants/topics";
import "./Topic.css";
export const Topic = () =>
  topics.map((topic) => (
    <Link
      to={`/${topic.slug}`}
      className="topic-link orange-gradient box-shadow block"
    >
      {topic.label}
    </Link>
  ));
