import './log.css';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherLogin = () => {
    const navigate = useNavigate();

    const saveTeacherLogin = (e) => {
        e.preventDefault();
        const usern = document.getElementsByName("usern")[0].value;
        const passw = document.getElementsByName("passw")[0].value;

        axios.post('http://localhost:8081/teacher/login', {
            usern,
            passw
        }).then((response) => {
            alert(response.data);
            if (response.data === "Teacher Login Success") {
                navigate('/teacher-portal');
            }
        }).catch((error) => {
            alert("Login failed. Check your credentials or server.");
        });
    };

    return (
        <div>
            <nav>
                <h3>Online Exam System</h3>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/login">LOGIN</a></li>
                    <li><a href="/signup">SIGNUP</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </nav>

            <div className="con">
                <h2>Teacher Login</h2>
                <form onSubmit={saveTeacherLogin}>
                    <label>Enter teacher Username:</label>
                    <input type="text" name='usern' placeholder="Username" />
                    <label>Enter Password:</label>
                    <input type="password" name='passw' placeholder="Password" />
                    <button type="submit">Login</button>
                    <h2>Don't have an account?</h2>
                    <button type="button" onClick={() => navigate('/tech_signup')}>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default TeacherLogin;
