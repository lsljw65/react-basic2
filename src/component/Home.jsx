// Props: 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.

import { Link } from "react-router-dom";
import { nation, nations } from "../data/data";
// import Props from "./pages/Props";

const Home=()=>{
    return(
        <>
            <div className="home">
                <h2>Home.jsx</h2>
                {/* <Props name="대한민국" age="12"/> */}
                {/* /board/110, /board?page=10, /board?q=a */}
                <Link to={
                    {
                        pathname:"/param/10"
                    }
                }>param전송(path variable)</Link>
                <div>
                    <p>
                        <Link to="/param?q=aa">Param전송</Link>
                    </p>
                    <p>
                        <Link to={
                            {
                                pathname:"/param",
                                search:"?q=aa"
                            }
                        }>param전송(query string)</Link>
                    </p>
                </div>
                {nations.map(n=>(
                    <Link to={
                        {
                            pathname:`/param/${n.name}`
                        }
                    }>{n.name}
                    </Link>
                ))}
            </div>
        </>
    )
}

/* function Home(){
    return(
        <>
            <div className="home">
                <h2>Home.jsx</h2>
            </div>
        </>
    )
} */

export default Home;

/* export default function Home(){
    return(
        <>
            <div className="home">
                <h2>Home.jsx</h2>
            </div>
        </>
    )
} */