import { useState } from "react"

export default function Team() {

    const [team, SetTeam] = useState(11)

    const handleAddPlayer = () => {
        const newTeam = team + 1
        SetTeam(newTeam)
    }

    const handleRemovePlayer = () => {
        const newTeam = team - 1
        SetTeam(newTeam)
    }

    const teamStyle = {
        border: '2px solid steelBlue',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Team : {team}</h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleRemovePlayer}>Remove Player</button>
        </div>
    )
}