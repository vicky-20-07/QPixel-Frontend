// import React, { useState, useRef } from "react";
// import styled from "styled-components";
// import TagInput from "./TagInput";
// import Header from "./Header";
// import PublicOffIcon from '@mui/icons-material/PublicOff';
// import PublicIcon from '@mui/icons-material/Public';
// import ScheduleIcon from '@mui/icons-material/Schedule';
// import './Create.css';
// import { useNavigate } from "react-router-dom";
// import RestrictedAccess from "./RestrictedAccess";
// import axios from 'axios';

// export default function Create() {
//     const today = new Date();
//     const date = new Intl.DateTimeFormat({
//         dateStyle: "short",
//     });
//     const time = new Intl.DateTimeFormat("es-sp", {
//         timeStyle: "short",
//     });

//     const [dateInput, setDateInput] = useState('text');
//     const [timeInput, setTimeInput] = useState('text');
//     const [display, setDisplay] = useState('none');
//     const navigate = useNavigate();
//     const [images, setImages] = useState([]);
//     const [isDragging, setIsDragging] = useState(false);
//     const fileInputRef = useRef(null);
//     const [privacy, setPrivacy] = useState('private'); // Default privacy

//     function selectFiles() {
//         fileInputRef.current.click();
//     }

//     const [file, setFile] = useState(null);
//     const [formData, setFormData] = useState({
//         title: '',
//         description: '',
//         category: '',
//         tags: '',
//         link: '',
//         device: ''
//     });

//     function uploadImages(e) {
//         e.preventDefault();
//         const form = new FormData();
//         form.append('file', file);
//         form.append('title', formData.title);
//         form.append('description', formData.description);
//         form.append('category', formData.category);
//         form.append('tags', formData.tags);
//         form.append('link', formData.link);
//         form.append('device', formData.device);
//         form.append('privacy', privacy);

//         axios.post('http://localhost:5000/imageUpload', form)
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//     }

//     function onFileSelect(event) {
//         const files = event.target.files;
//         if (files.length === 0) return;

//         const file = files[0];
//         if (file.type.split('/')[0] !== 'image') return;

//         setFile(file);
//         setImages([{
//             name: file.name,
//             url: URL.createObjectURL(file),
//         }]);
//     }

//     function deleteImage() {
//         setFile(null);
//         setImages([]);
//     }

//     function onDragOver(event) {
//         event.preventDefault();
//         setIsDragging(true);
//         event.dataTransfer.dropEffect = "copy";
//     }

//     function onDragLeave(event) {
//         event.preventDefault();
//         setIsDragging(false);
//     }

//     function onDrop(event) {
//         event.preventDefault();
//         setIsDragging(false);

//         const files = event.dataTransfer.files;
//         if (files.length === 0) return;

//         const file = files[0];
//         if (file.type.split('/')[0] !== 'image') return;

//         setFile(file);
//         setImages([{
//             name: file.name,
//             url: URL.createObjectURL(file),
//         }]);
//     }

//     function handleInputChange(e) {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     }

//     const displaySet = window.localStorage.getItem('isloggedin');

//     return (
//         displaySet ? (
//             <Cover>
//                 <Header />
//                 <Wrapper>
//                     <Container className="card">
//                         <div className="uploadSection">
//                             {!images.length && (
//                                 <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
//                                     {isDragging ? (
//                                         <span className="select">Drop image here</span>
//                                     ) : (
//                                         <>
//                                             Drag & drop image here or {" "}
//                                             <span className="select" role="button" onClick={selectFiles} >
//                                                 Browse
//                                             </span>
//                                         </>
//                                     )}
//                                     <input type="file" className="file" ref={fileInputRef} onChange={onFileSelect} ></input>
//                                 </div>
//                             )}
//                             <div className="container">
//                                 {images.map((image, index) => (
//                                     <div className="image" key={index}>
//                                         <img src={image.url} alt={image.name} />
//                                         <button className="delete" onClick={deleteImage}>Remove image</button>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </Container>
//                     <form className="input-form" onSubmit={uploadImages}>
//                         <div className="privacy-container">
//                             <div className="radio-tile-group" onClick={() => setDisplay('none')}>
//                                 <div className="input-container">
//                                     <input type="radio" name="privacy" value="private" checked={privacy === 'private'} onChange={() => setPrivacy('private')} />
//                                     <div className="private">
//                                         <PublicOffIcon className="private-icon" />
//                                         <label>Private</label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="radio-tile-group" onClick={() => setDisplay('none')}>
//                                 <div className="input-container">
//                                     <input type="radio" name="privacy" value="public" checked={privacy === 'public'} onChange={() => setPrivacy('public')} />
//                                     <div className="private">
//                                         <PublicIcon className="private-icon" />
//                                         <label>Public</label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="radio-tile-group" onClick={() => setDisplay('block')}>
//                                 <div className="input-container">
//                                     <input type="radio" name="privacy" value="schedule" checked={privacy === 'schedule'} onChange={() => setPrivacy('schedule')} />
//                                     <div className="private">
//                                         <ScheduleIcon className="private-icon" />
//                                         <label>Schedule</label>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="schedule" style={{ display: display }}>
//                             <p>Schedule the date and time for the images to be uploaded</p>
//                             <div className="schedule-time">
//                                 <input type={dateInput} className="date" onFocus={() => setDateInput('date')} onBlur={() => setDateInput('text')} placeholder={date.format(today)} />
//                                 <input type={timeInput} className="time" onFocus={() => setTimeInput('time')} onBlur={() => setTimeInput('text')} placeholder={time.format(today)} />
//                             </div>
//                         </div>
//                         {/* Rest of the form for image details */}
//                         <div className="form-div" id="title">
//                             <label htmlFor="title">Title</label>
//                             <input type="text" name="title" placeholder="Add a title *" required onChange={handleInputChange} value={formData.title} />
//                         </div>
//                         <div className="form-div" id="description">
//                             <label htmlFor="description">Description</label>
//                             <textarea className="description" placeholder="Add a detailed description" name="description" onChange={handleInputChange} value={formData.description} />
//                         </div>
//                         <div className="form-div" id="category">
//                             <label htmlFor="category">Category</label>
//                             <input type="text" name="category" placeholder="Add a category *" required onChange={handleInputChange} value={formData.category} />
//                         </div>
//                         <div className="form-div" id="tags">
//                             <label htmlFor="tags">Tag</label>
//                             <TagInput className="tags" name="tags" required onChange={handleInputChange} value={formData.tags} />
//                         </div>
//                         <div className="form-div" id="link">
//                             <label htmlFor="link">Link</label>
//                             <input type="url" placeholder="Add a link" name="link" onChange={handleInputChange} value={formData.link} />
//                         </div>
//                         <div className="form-div" id="device">
//                             <label htmlFor="device">Device</label>
//                             <input type="text" name="device" placeholder="Device name" required onChange={handleInputChange} value={formData.device} />
//                         </div>
//                         <div style={{ display: "flex", gap: "20px" }}>
//                             <button type="reset" className="upload-button" onClick={() => navigate('/Home')}>Cancel</button>
//                             <button type="submit" className="upload-button">Upload</button>
//                         </div>
//                     </form>
//                 </Wrapper>
//             </Cover>
//         ) : (
//             <RestrictedAccess />
//         )
//     );
// }

// const Cover = styled.div`
// `;

// const Wrapper = styled.div`
//     background-color: #100C08;
//     position: absolute;
//     width: 100%;
//     top: 25;
//     left: 0;
// `;

// const Container = styled.div`
// `;


import React, { useState, useRef } from "react";
import styled from "styled-components";
import TagInput from "./TagInput";
import Header from "./Header";
import PublicOffIcon from '@mui/icons-material/PublicOff';
import PublicIcon from '@mui/icons-material/Public';
import ScheduleIcon from '@mui/icons-material/Schedule';
import './Create.css';
import { useNavigate } from "react-router-dom";
import RestrictedAccess from "./RestrictedAccess";
import axios from 'axios';

export default function Create() {
    const today = new Date();
    const date = new Intl.DateTimeFormat({
        dateStyle: "short",
    });
    const time = new Intl.DateTimeFormat("es-sp", {
        timeStyle: "short",
    });

    const [dateInput, setDateInput] = useState('text');
    const [timeInput, setTimeInput] = useState('text');
    const [display, setDisplay] = useState('none');
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const [privacy, setPrivacy] = useState('private'); // Default privacy
    const [tags, setTags] = useState([]); // Manage tags

    function selectFiles() {
        fileInputRef.current.click();
    }

    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        link: '',
        device: ''
    });

    function uploadImages(e) {
        e.preventDefault();
        const form = new FormData();
        form.append('file', file);
        form.append('title', formData.title);
        form.append('description', formData.description);
        form.append('category', formData.category);
        form.append('tags', tags.join(',')); // Convert tags array to a comma-separated string
        form.append('link', formData.link);
        form.append('device', formData.device);
        form.append('privacy', privacy);

        axios.post('http://localhost:5000/imageUpload', form)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;

        const file = files[0];
        if (file.type.split('/')[0] !== 'image') return;

        setFile(file);
        setImages([{
            name: file.name,
            url: URL.createObjectURL(file),
        }]);
    }

    function deleteImage() {
        setFile(null);
        setImages([]);
    }

    function onDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event) {
        event.preventDefault();
        setIsDragging(false);
    }

    function onDrop(event) {
        event.preventDefault();
        setIsDragging(false);

        const files = event.dataTransfer.files;
        if (files.length === 0) return;

        const file = files[0];
        if (file.type.split('/')[0] !== 'image') return;

        setFile(file);
        setImages([{
            name: file.name,
            url: URL.createObjectURL(file),
        }]);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const displaySet = window.localStorage.getItem('isloggedin');

    return (
        displaySet ? (
            <Cover>
                <Header />
                <Wrapper>
                    <Container className="card">
                        <div className="uploadSection">
                            {!images.length && (
                                <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                                    {isDragging ? (
                                        <span className="select">Drop image here</span>
                                    ) : (
                                        <>
                                            Drag & drop image here or {" "}
                                            <span className="select" role="button" onClick={selectFiles} >
                                                Browse
                                            </span>
                                        </>
                                    )}
                                    <input type="file" className="file" ref={fileInputRef} onChange={onFileSelect} ></input>
                                </div>
                            )}
                            <div className="container">
                                {images.map((image, index) => (
                                    <div className="image" key={index}>
                                        <img src={image.url} alt={image.name} />
                                        <button className="delete" onClick={deleteImage}>Remove image</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                    <form className="input-form" onSubmit={uploadImages}>
                        <div className="privacy-container">
                            <div className="radio-tile-group" onClick={() => setDisplay('none')}>
                                <div className="input-container">
                                    <input type="radio" name="privacy" value="private" checked={privacy === 'private'} onChange={() => setPrivacy('private')} />
                                    <div className="private">
                                        <PublicOffIcon className="private-icon" />
                                        <label>Private</label>
                                    </div>
                                </div>
                            </div>
                            <div className="radio-tile-group" onClick={() => setDisplay('none')}>
                                <div className="input-container">
                                    <input type="radio" name="privacy" value="public" checked={privacy === 'public'} onChange={() => setPrivacy('public')} />
                                    <div className="private">
                                        <PublicIcon className="private-icon" />
                                        <label>Public</label>
                                    </div>
                                </div>
                            </div>
                            <div className="radio-tile-group" onClick={() => setDisplay('block')}>
                                <div className="input-container">
                                    <input type="radio" name="privacy" value="schedule" checked={privacy === 'schedule'} onChange={() => setPrivacy('schedule')} />
                                    <div className="private">
                                        <ScheduleIcon className="private-icon" />
                                        <label>Schedule</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="schedule" style={{ display: display }}>
                            <p>Schedule the date and time for the images to be uploaded</p>
                            <div className="schedule-time">
                                <input type={dateInput} className="date" onFocus={() => setDateInput('date')} onBlur={() => setDateInput('text')} placeholder={date.format(today)} />
                                <input type={timeInput} className="time" onFocus={() => setTimeInput('time')} onBlur={() => setTimeInput('text')} placeholder={time.format(today)} />
                            </div>
                        </div>
                        {/* Rest of the form for image details */}
                        <div className="form-div" id="title">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" placeholder="Add a title *" required onChange={handleInputChange} value={formData.title} />
                        </div>
                        <div className="form-div" id="description">
                            <label htmlFor="description">Description</label>
                            <textarea className="description" placeholder="Add a detailed description" name="description" onChange={handleInputChange} value={formData.description} />
                        </div>
                        <div className="form-div" id="category">
                            <label htmlFor="category">Category</label>
                            <input type="text" name="category" placeholder="Add a category *" required onChange={handleInputChange} value={formData.category} />
                        </div>
                        <div className="form-div" id="tags">
                            <label htmlFor="tags">Tag</label>
                            <TagInput tags={tags} setTags={setTags} />
                        </div>
                        <div className="form-div" id="link">
                            <label htmlFor="link">Link</label>
                            <input type="url" placeholder="Add a link" name="link" onChange={handleInputChange} value={formData.link} />
                        </div>
                        <div className="form-div" id="device">
                            <label htmlFor="device">Device</label>
                            <input type="text" name="device" placeholder="Device name" required onChange={handleInputChange} value={formData.device} />
                        </div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <button type="reset" className="upload-button" onClick={() => navigate('/Home')}>Cancel</button>
                            <button type="submit" className="upload-button">Upload</button>
                        </div>
                    </form>
                </Wrapper>
            </Cover>
        ) : (
            <RestrictedAccess />
        )
    );
}

const Cover = styled.div`
`;

const Wrapper = styled.div`
    background-color: #100C08;
    position: absolute;
    width: 100%;
    top: 25;
    left: 0;
`;

const Container = styled.div`
`;
