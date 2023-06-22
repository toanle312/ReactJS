import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
    const context = useContext(ThemeContext);
    return (
        <div className={context.theme}>
            <p>This is Paragraph This is Paragraph This is Paragraph This is Paragraph</p>
        </div>
    )
}
export default Paragraph;
