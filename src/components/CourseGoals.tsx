import React, { FC, type ReactNode } from "react";

// we have 2 way for giving type to the children props -> first way : you give to the children props ReactNode types
// second way is => type CourseGoals = PropsWithChildren<{title : string}> . i suggest you use first way , its easier than second way
type CourseGoals = {
  id: number;
  title: string;
  Click: (id: number) => void;
  children: ReactNode;
};
const CourseGoals: FC<CourseGoals> = ({ title, children, Click, id }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => Click(id)}>Delete</button>
    </article>
  );
};

export default CourseGoals;
