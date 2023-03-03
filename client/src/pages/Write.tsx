import {useState} from "react";
import "./Write.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState<string>('');

    return (
        <div className="write">
            <div className="write__content">
                <input type="text" placeholder="Title"/>
                <div className="editor">
                    <ReactQuill className="editor__input" theme="snow" value={value} onChange={setValue}/>
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
                    <input id="blogFile" type="file"/>
                    <label className="blog-file" htmlFor="blogFile">Upload Image</label>
                    <div className="write__menu-item-buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="write__menu-item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="art" id="art"/>
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="science" id="science"/>
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="technology" id="technology"/>
                        <label htmlFor="technology">Technology</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="cinema" id="cinema"/>
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="design" id="design"/>
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="food" id="food"/>
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
