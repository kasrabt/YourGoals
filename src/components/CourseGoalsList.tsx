
import CourseGoals from "./CourseGoals";
import { CourseGoal } from "../App";
type CourseGoalstype = {
  goals: CourseGoal[];
  Clicked: (id: number) => void;
};
const CourseGoalsList = ({ goals, Clicked }: CourseGoalstype) => {
  return (
    <ul>
      {goals.map((item) => (
        <li key={item.id}>
          <CourseGoals title={item.title} Click={Clicked} id={item.id}>
            <p>{item.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalsList;
