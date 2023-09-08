export default function Post({ post }) {
    // console.log(post);
    const { id, title, body } = post
    return (
        <div className="postStyle">
            <h2>Id: {id}</h2>
            <h3>Post Title: {title} </h3>
            <p><small>Post Description: {body}</small></p>
        </div>
    )
}