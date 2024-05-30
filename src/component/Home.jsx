// Props: 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.

import Props from "./pages/Props";

const Home=()=>{
    return(
        <>
            <div className="home">
                <h2>Home.jsx</h2>
                <Props name="대한민국" age="12"/>
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