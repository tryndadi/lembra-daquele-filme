import { useHistory } from "react-router-dom";

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