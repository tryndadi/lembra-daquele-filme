
import React from "react";
import { useHistory } from "react-router-dom";
import React from "react";

const ButtonToPage = ({route, children}) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(route)
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default ButtonToPage

