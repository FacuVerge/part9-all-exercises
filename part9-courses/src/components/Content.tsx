import { ContentProps } from "../types";
import Part from "./Part";

const Content = (props: ContentProps) => {
    return (
        <>
            {props.courseParts.map((course, index) => <Part key={index} course={course}/>)}
        </>
    )
}

export default Content;