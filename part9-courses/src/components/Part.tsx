import { PartProps } from "../types";

const Part = (props: PartProps) => {
    switch(props.course.kind) {
        case "background":
            return(
                <>
                    <h2>{props.course.name} {props.course.exerciseCount}</h2>
                    <p>{props.course.description}</p>
                    <p>{props.course.backgroundMaterial}</p>
                </>
            )
        case "basic":
            return(
                <>
                    <h2>{props.course.name} {props.course.exerciseCount}</h2>
                    <p>{props.course.description}</p>
                </>
            )
        case "group":
            return(
                <>
                    <h2>{props.course.name} {props.course.exerciseCount}</h2>
                    <p>{props.course.groupProjectCount}</p>
                </>
            )
        case "special":
            return(
                <>
                    <h2>{props.course.name} {props.course.exerciseCount}</h2>
                    <p>{props.course.description}</p>
                    <p>required skills: {props.course.requirements.join(', ')}</p>
                </>
            )
        default:
            return(
                <>
                </>
            )
    }
}

export default Part;