import {FormEvent, useState} from "react";
import "./Write.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Categories from "./components/Categories";
import {createPostService, uploadPostImgService} from "../../services/post.service";
import {useLocation} from "react-router-dom";

const Write = () => {
    const {state} = useLocation();

    const [desc, setDesc] = useState<string>(state?.desc || '');
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState<FileList | null>(null);
    const [cat, setCat] = useState(state?.cat || "");


    const uploadFile = async () => {
        const formData = new FormData();
        formData.append("file", file![0]);
        try {
            return await uploadPostImgService(formData);
        } catch (e) {
            console.log(e);
        }
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const upload = await uploadFile();

        if (upload?.status === 200) {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("desc", desc);
            formData.append("cat", cat);
            formData.append("img", upload?.data);

            try {
                const {data, status} = await createPostService(formData);
                console.log(data)

            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("Something went wrong!")
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
