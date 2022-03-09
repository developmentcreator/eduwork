import { useParams } from "react-router-dom";
const Post = () => {
    const { id } = useParams();
    return (
        <div className="main">
            <h1>Post Page</h1>
            <h2>{id}</h2>
            <button onClick={id}>kembali</button>
        </div>
    )
}

export default Post;