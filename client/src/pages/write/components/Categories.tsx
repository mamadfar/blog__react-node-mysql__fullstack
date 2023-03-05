import {FC} from "react";
import {CATEGORIES} from "../../../data";

const Categories:FC<{ cat: string, setCat: (cat: string)=> void }> = ({cat, setCat}) => {
    return (
        <div>
            {CATEGORIES.map(({id, name, value}) => (
                <div key={id} className="cat">
                    <input type="radio" checked={cat === value} name="cat" value={value} id={name} onChange={e => setCat(e.target.value)}/>
                    <label htmlFor={name} style={{textTransform: "capitalize"}}>{name}</label>
                </div>
            ))}
        </div>
    )
};

export default Categories;
