import { Link, useNavigate } from 'react-router-dom';
import './student_portal.css';

const Teacher_portal = () => {
    const navigate = useNavigate();

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
                <h2>Welcome to the Teacher Portal</h2>
                <h2>Here you can access your profile, view exams, check results, and get help.</h2>

                <button onClick={() => navigate('/create-exam')}>
                    Create Exam
                </button>
            </div>
        </div>
    );
};

export default Teacher_portal;
