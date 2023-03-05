import "./SinglePost.scss";
import Edit from "../../assets/img/edit.png";
import Delete from "../../assets/img/delete.png";
import {Link, useNavigate, useParams} from "react-router-dom";
import Menu from "./components/Menu";
import {useEffect, useState} from "react";
import {IPostWithUser} from "../../model/post.model";
import {deletePostService, getPostService} from "../../services/post.service";
import moment from "moment";
import {useAuth} from "../../hooks/useAuth";
import parse from "html-react-parser";

const SinglePost = () => {
    const [post, setPost] = useState<IPostWithUser>();

    const {user} = useAuth();
    const params = useParams();
    const navigate = useNavigate();

    const getPost = async () => {
        try {
            const {data, status} = await getPostService(params.id);
            if (status === 200) {
                setPost(data);
            }
        } catch (e) {
            console.log(e)
        }
    };

    const deletePost = async () => {
        try {
            const {status} = await deletePostService(params.id);
            if (204) navigate("/", {replace: true})
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPost();
    }, [params])
    return (
        <div className="single-post">
            <div className="single-post__content">
                <img
                    src={post?.img}
                    alt=""/>
                <div className="single-post__content__user">
                    {post?.userImg && (
                        <img
                            src={post?.userImg}
                            alt={post?.username}/>
                    )}
                    <div className="single-post__content__user-info">
                        <span>{post?.username}</span>
                        <p>Posted {moment(post?.date).fromNow()}</p>
                    </div>
                    {user?.username === post?.username && (
                        <div className="single-post__content__user-edit">
                            <Link to={`/write?edit=${post?.id}`} state={post}>
                                <img src={Edit} alt="edit"/>
                            </Link>
                            <img src={Delete} alt="delete" onClick={deletePost}/>
                        </div>
                    )}
                </div>
                <h1>{post?.title}</h1>
                <div>{post?.desc && parse(post.desc)}</div>
            </div>
            <Menu cat={post?.cat}/>
        </div>
    )
}

export default SinglePost
