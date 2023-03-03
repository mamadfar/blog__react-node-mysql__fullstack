import {POSTS} from "../../../data";
import {Button} from "../../../components";

const Menu = () => {
    return (
        <div className="single-post__menu">
            <h1>Other posts you may like</h1>
            {POSTS.map(post => (
                <div key={post.id} className="post">
                    <img src={post.img} alt={post.title}/>
                    <h2>{post.title}</h2>
                    <Button title="Read More"/>
                </div>
            ))}
        </div>
    )
};

export default Menu;
