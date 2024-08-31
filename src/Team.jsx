import { useState } from "react"

export default function Team() {
    const [team, setTeam]= useState(11);

    const handleAdd=()=>{
        const newTeam=team+1;
        setTeam(newTeam);
    }
    // eta new rule ............
    
    const handleRemove=()=>{
        // const newTeam=team+1;
        setTeam(team-1);
    }


    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3> 
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}





// export default function Team() {
//     const teamStyle = {
//         border: '2px solid purple',
//         margin: '15px',
//         padding: '15px',
//         borderRadius: '15px'
//     }
//     return {
//        <div>
//         <h3>Players:</h3>
//        </div>
//     }
// }