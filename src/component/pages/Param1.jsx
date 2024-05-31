import { useParams } from "react-router-dom";

const Param1=()=>{
    const { id }=useParams();
    console.log(id)
    return(
        <>
            <div className="param1 page">
                <h2>Param1.jsx</h2>
                <p>요청 id : {id}</p>
            </div>
        </>
    )
}

/* function Param1(){
    return()
} */

export default Param1;