import CourseGoals from "./CourseGoals";
import { CourseGoal } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalstype = {
  goals: CourseGoal[];
  Clicked: (id: number) => void;
};
const CourseGoalsList = ({ goals, Clicked }: CourseGoalstype) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no Course yet , Start adding Some</InfoBox>
    );
  }
  let warningMode ;
  if (goals.length >= 4) {
    warningMode = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a Lot of goals , don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningMode}
      <ul>
        {goals.map((item) => (
          <li key={item.id}>
            <CourseGoals title={item.title} Click={Clicked} id={item.id}>
              <p>{item.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalsList;
