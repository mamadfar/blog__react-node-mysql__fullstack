import "./Home.scss";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Button} from "../components";
import {useEffect, useState} from "react";
import {IPost} from "../model/post.model";
import {getPostsService} from "../services/post.service";
import parse from "html-react-parser";

const Home = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const {search} = useLocation();
    const navigation = useNavigate();

    const getPosts = async () => {
        try {
            const {data, status} = await getPostsService(search);
            if (status === 200) {
                setPosts(data);
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getPosts();
    }, [search])

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post__img">
                            <img src={post.img} alt={post.title}/>
                        </div>
                        <div className="post__content">
                            <Link to={`/post/${post.id}`} className="link">
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{parse(post.desc)}</p>
                            <Button title="Read More" handler={() => navigation(`/post/${post.id}`)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
