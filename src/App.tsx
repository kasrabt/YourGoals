import "./App.css";

import GolasImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoals from "./components/NewGoals";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoals = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const HandleDelete = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: GolasImg, alt: "your goal image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoals onAddGoal={handleAddGoals} />
      <CourseGoalsList goals={goals} Clicked={HandleDelete} />
    </main>
  );
}

export default App;
