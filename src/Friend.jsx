export default function Friend({ friend }) {
    // console.log(friend);
    const { id, name, email, username } = friend
    return (
        <div className="friendStyle">
            <h4>Id: {id}</h4>
            <h4>Name: {name} </h4>
            <p>Email: {email} </p>
            <p>User Name: {username} </p>
        </div>
    )
}