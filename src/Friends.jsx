import Friend from './Friend'
import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends() {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div className='friendStyle'>
            <h3>Friends: {friends.length}</h3>

            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>

    )
}