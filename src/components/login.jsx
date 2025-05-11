import './log.css';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const navigate = useNavigate();

    const saveStudentLogin = (e) => {
        e.preventDefault();
        const usern = document.getElementsByName("usern")[0].value;
        const passw = document.getElementsByName("passw")[0].value;

        axios.post('http://localhost:8081/student/login', {
            usern,
            passw
        }).then((response) => {
            alert(response.data);
            if (response.data === "Student Login Success") {
                navigate('/student-portal'); 
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
                <h2>Student Login</h2>
                <form onSubmit={saveStudentLogin}>
                    <label>Enter student Username:</label>
                    <input type="text" name='usern' placeholder="Username" />
                    <label>Enter Password:</label>
                    <input type="password" name='passw' placeholder="Password" />
                    <button type="submit">Login</button>
                    <h2>Don't have an account?</h2>
                    <button type="button" onClick={() => navigate('/student_signup')}>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default StudentLogin;
