import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './student_portal.css';

const HomeRouter = () => {
    const [examNames, setExamNames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/teacher/exam-names')
            .then(response => {
                setExamNames(response.data);
            })
            .catch(error => {
                console.error("Failed to fetch exam names", error);
            });
    }, []);

    const handleTakeExam = (examName) => {
        navigate(`/take-exam/${encodeURIComponent(examName)}`);
    };

    return (
        <div>
            <nav>
                <h3>Online Exam System</h3>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/signup">SIGNUP</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>

            <div className="content">
                <h2>Welcome to the Student Portal</h2>
                <h4>Exams:</h4>
                <div className="exam-buttons">
                    {examNames.map((name, index) => (
                        <button 
                            key={index} 
                            className="exam-btn"
                            onClick={() => handleTakeExam(name)}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeRouter;
