import {Button} from "../../../components";
import {FC, useEffect, useState} from "react";
import {getPostsService} from "../../../services/post.service";
import {IPost} from "../../../model/post.model";

const Menu: FC<{ cat?: string }> = ({cat}) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const getPosts = async () => {
        try {
            const {data, status} = await getPostsService(`?cat=${cat}`);
            if (status === 200) {
                setPosts(data);
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        if (cat) getPosts();
    }, [cat])

    return (
        <div className="single-post__menu">
            <h1>Other posts you may like</h1>
            {cat ? (
                <>
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <img src={post.img} alt={post.title}/>
                            <h2>{post.title}</h2>
                            <Button title="Read More"/>
                        </div>
                    ))}
                </>
            ) : <h4>There is no similar post.</h4>}
        </div>
    )
};

export default Menu;
