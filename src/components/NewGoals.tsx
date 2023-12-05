import  { FormEvent, useRef } from "react";
export type newGolasProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
const NewGoals = ({ onAddGoal }: newGolasProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    if (enteredGoal.length === 0 || enteredSummary.length === 0) {
      return;
    }
    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal"> your Goal</label>
        <input id="goal" type="text" name="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary"> short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoals;
