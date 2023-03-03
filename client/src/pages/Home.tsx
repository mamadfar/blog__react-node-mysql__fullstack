import "./Home.scss";
import {Link} from "react-router-dom";
import {POSTS} from "../data";
import {Button} from "../components";

const Home = () => {
    return (
        <div className="home">
            <div className="posts">
                {POSTS.map(post => (
                    <div key={post.id} className="post">
                        <div className="post__img">
                            <img src={post.img} alt={post.title}/>
                        </div>
                        <div className="post__content">
                            <Link to={`/post/${post.id}`} className="link">
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <Button title="Read More"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
