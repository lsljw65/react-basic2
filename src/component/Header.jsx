import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/info">Info</Link>
            </div>
        </>
    )
}

/* function Header(){
    return(
        <>
            <div className="header">
                <h2>Header.jsx</h2>
            </div>
        </>
    )
} */

export default Header;

/* export default function Header(){
    return(
        <>
            <div className="header">
                <h2>Header.jsx</h2>
            </div>
        </>
    )
} */