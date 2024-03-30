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

export default function Create() {

    const today = new Date();

    const date = new Intl.DateTimeFormat({
        dateStyle: "short",
    })

    const time = new Intl.DateTimeFormat("es-sp", {
        timeStyle: "short",
    })

    const [dateInput, setDateInput] = useState('text');
    const [timeInput, setTimeInput] = useState('text');

    const [display, setDisplay] = useState('none');

    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    function selectFiles() {
        fileInputRef.current.click();
    }

    function onFileSelect(event) {
        const files = event.target.files;

        if (files.length === 0) return;

        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;

            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    function deleteImage(index) {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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

        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') {
                continue;
            }

            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }

    }

    function uploadImages() {
        console.log("images: ", images);
    }

    const displaySet = window.localStorage.getItem('isloggedin');

    return (
        displaySet ? (
            <Cover>
                <Header />
                <Wrapper>
                    <Container className="card">
                        <div className="uploadSection">
                            <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>

                                {isDragging ? (
                                    <span className="select">Drop images here</span>
                                ) : (
                                    <>
                                        Drag & drop images here or {" "}
                                        <span className="select" role="button" onClick={selectFiles} >
                                            Browse
                                        </span>
                                    </>
                                )}

                                <input type="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect} ></input>
                            </div>
                            <div className="container">

                                {images.map((images, index) => (
                                    <div className="image" key={index}>
                                        <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                                        <img src={images.url} alt={images.name} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                    <form className="input-form" action="#" method="put" >
                        <div className="privacy-container">
                            <div className="radio-tile-group" onClick={() => setDisplay('none')}>
                                <div className="input-container">
                                    <input type="radio" name="privacy" />
                                    <div className="private">
                                        <PublicOffIcon className="private-icon" />
                                        <label>Private</label>
                                    </div>
                                </div>
                            </div>
                            <div className="radio-tile-group" onClick={() => setDisplay('none')}>
                                <div className="input-container">
                                    <input type="radio" name="privacy" />
                                    <div className="private">
                                        <PublicIcon className="private-icon" />
                                        <label for>Public</label>
                                    </div>
                                </div>
                            </div>
                            <div className="radio-tile-group" onClick={() => setDisplay('block')}>
                                <div className="input-container">
                                    <input type="radio" name="privacy" />
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
                        <div className="form-div" id="title">
                            <label for="title">Title</label>
                            <input type="text" name="title" placeholder="Add a title *" required />
                        </div>
                        <div className="form-div" id="description">
                            <label for="description">Description</label>
                            <textarea className="description" placeholder="Add a detailed description" />
                        </div>
                        <div className="form-div" id="title">
                            <label for="category">Category</label>
                            <input type="text" name="category" placeholder="Add a category *" required />
                        </div>
                        <div className="form-div" id="tags">
                            <label for="tags">Tag</label>
                            <TagInput className="tags" name="tags" required />
                        </div>
                        <div className="form-div" id="link">
                            <label for="link">Link</label>
                            <input type="url" placeholder="Add a link" />
                        </div>
                        <div className="form-div" id="title">
                            <label for="device">Device</label>
                            <input type="text" name="device" placeholder="Device name" required />
                        </div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <button type="reset" className="upload-button" onClick={() => navigate('/Home')}>Cancel</button>
                            <button type="submit" className="upload-button" onClick={uploadImages}>Upload</button>
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
`

const Wrapper = styled.div`
    background-color: #100C08;
    position: absolute;
    width: 100%;
    top: 25;
    left: 0;
`

const Container = styled.div`
`