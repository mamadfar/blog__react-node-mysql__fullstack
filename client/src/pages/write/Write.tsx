import {FormEvent, useState} from "react";
import "./Write.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Categories from "./components/Categories";
import {createPostService, updatePostService, uploadPostImgService} from "../../services/post.service";
import {useLocation, useNavigate} from "react-router-dom";
import moment from "moment";

const Write = () => {
    const {state} = useLocation();
    const navigate = useNavigate();

    const [desc, setDesc] = useState<string>(state?.desc || '');
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState<FileList | null | string>(state?.img || null);
    const [cat, setCat] = useState(state?.cat || "");

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("cat", cat);
        // formData.append("img", (typeof imgUrl === "string") ? imgUrl : imgUrl?.data);
        if (file != null) {
            formData.append("img", typeof file === "string" ? file : file[0]);
        }
        formData.append("date", moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"));

        try {
            if (!state) {
                const {data, status} = await createPostService(formData);
                if (status === 201) {
                    navigate("/");
                }
            } else {
                const {data, status} = await updatePostService(state.id, formData);
                if (status === 200) {
                    navigate(-1);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form className="write" onSubmit={onSubmit}>
            <div className="write__content">
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                <div className="editor">
                    <ReactQuill className="editor__input" theme="snow" value={desc} onChange={setDesc}/>
                </div>
            </div>
            <div className="write__menu">
                <div className="write__menu-item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input id="blogFile" type="file" onChange={e => setFile(e.target.files)}/>
                    <label className="blog-file" htmlFor="blogFile">Upload Image</label>
                    <div className="write__menu-item-buttons">
                        <button>Save as a draft</button>
                        <button>Publish</button>
                    </div>
                </div>
                <div className="write__menu-item">
                    <h1>Category</h1>
                    <Categories cat={cat} setCat={setCat}/>
                </div>
            </div>
        </form>
    )
}

export default Write
