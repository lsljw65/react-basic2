const nation={
    name:"대한민국",
    population:51400000,
    capital:"서울",
    language:"한국어"
}

const nations=[{
        name:"대한민국",
        population:51400000,
        capital:"서울",
        language:"한국어"
    },
    {
        name:"프랑스",
        population:67400000,
        capital:"서울",
        language:"프랑스어"
    },
    {
        name:"호주",
        population:71800000,
        capital:"캔버러",
        language:"영어"
    },
    {
        name:"미국",
        population:251400000,
        capital:"워싱턴",
        language:"영어"
    }]
const Info=()=>{
    return(
        <>
            <div className="page info">
                <h2>info.jsx</h2>
                <p>{nation.name},{nation.population},{nation.capital},{nation.language}</p>
                {nations.map(n => (
                    <p>{n.name}, {n.population}, {n.capital}, {n.language}</p>
                ))}
            </div>
        </>
    )
}

/* function Info(){
    return(
        <>
            <div className="page info">
                <h2>info.jsx</h2>
                <p>{nation.name},{nation.population},{nation.capital},{nation.language}</p>
                {nations.map(n => (
                    <p>{n.name}, {n.population}, {n.capital}, {n.language}</p>
                ))}
            </div>
        </>
    )
} */

export default Info;

/* export default function Info(){
    return(
        <>
            <div className="page info">
                <h2>info.jsx</h2>
                <p>{nation.name},{nation.population},{nation.capital},{nation.language}</p>
                {nations.map(n => (
                    <p>{n.name}, {n.population}, {n.capital}, {n.language}</p>
                ))}
            </div>
        </>
    )
} */