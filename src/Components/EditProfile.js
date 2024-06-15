import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const EditProfile = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profile: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/getUserProfile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setUser(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setUser(prevState => ({
            ...prevState,
            profile: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('firstName', user.firstName);
        formData.append('lastName', user.lastName);
        formData.append('email', user.email);
        if (user.profile instanceof File) {
            formData.append('profile', user.profile);
        }

        axios.post('http://localhost:5000/updateUserProfile', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            navigate('/profile');
        })
        .catch(err => console.log(err));
    };

    return (
        <EditProfileContainer>
            <Header />
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
                <label>Last Name</label>
                <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
                <label>Profile Picture</label>
                <input type="file" name="profile" onChange={handleFileChange} />
                <button type="submit">Save Changes</button>
            </form>
        </EditProfileContainer>
    );
};

export default EditProfile;

const EditProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    margin-top: 10px;
`;

const Input = styled.input`
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 10px;
    width: 300px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #0056b3;
    }
`;
