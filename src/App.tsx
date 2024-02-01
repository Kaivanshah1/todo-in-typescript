import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = { id: number; description: string, title: string };
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal : CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...prevGoals, newGoal];
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== id);
    })
  }
  return (
    <main>
      <Header image={{src: '../public/goals.jpg', alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>  
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  )
}
