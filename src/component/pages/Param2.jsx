import { useParams, useSearchParams } from "react-router-dom";

const Param2=()=>{
    const [params]=useSearchParams()
    console.log(params.get("q"))
    return(
        <>
            <div className="param2 page">
                <h2>Param2.jsx</h2>
                <p>요청 id : </p>
            </div>
        </>
    )
}

/* function Param1(){
    return()
} */

export default Param2;