import React, { useState } from "react";
import './TagInput.css';

export default function TagInput() {
    const [tags, setTags] = useState([]);

    function handleKeyDown(e) {
        if(e.key !== 'Enter') return;
        
        const value = e.target.value;
        
        if(!value.trim()) return;

        setTags([...tags, value]);
        e.target.value = '';
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="tags-input-container">
            {tags.map((tag, index) => (
                <div key={index} className="tag-item">
                <span className="text">{tag}</span>
                <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
            <textarea onKeyDown={handleKeyDown} className="tags-input" placeholder="Add a tag *"/>
        </div>
    );
}