import { FormEvent, useRef } from "react";
type NewGoalProps = {
    onAddGoal : (goal: string, summary: string) => void
}
export default function NewGoal({onAddGoal}: NewGoalProps){
    const goal = useRef<HTMLInputElement>(null) //the useRef hook allows us to get access to the input element
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(e: FormEvent<HTMLFormElement> ) {
        e.preventDefault();  
        
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value; //the ! exclamation mark tells typescript that we are sure that the value is not null, even if it is currenlty null allow it to be used

        e.currentTarget.reset(); //reset the form
        onAddGoal(enteredGoal, enteredSummary);
    } 
     
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summary}/>
            </p>
            <p>
            <button>Add Goal</button>
            </p>
        </form>
    )
}