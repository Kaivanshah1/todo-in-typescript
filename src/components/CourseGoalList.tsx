import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoals = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({ goals, onDelete }: CourseGoals) {
  if (goals.length === 0)
    return <InfoBox mode="hint">No goals have been added yet!</InfoBox>;

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        Our goals reach to limit 4 goals!
      </InfoBox>
    );
  }
  return (
    <ul>
      {warningBox}
      {goals.map(({ title, id, description }) => (
        <li key={id}>
          <CourseGoal title={title} onDelete={onDelete} id={id}>
            <p>{description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
