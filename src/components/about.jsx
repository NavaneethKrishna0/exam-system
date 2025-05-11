import { Link } from 'react-router-dom';
import './home1.css';

const About = () => (
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

        <div className="content" color='black'>
            <h2 >About Online Exam System</h2>
            <h3 >
                The Online Exam System is a web-based platform designed to simplify and streamline the process of conducting exams online.
                It offers secure student and teacher login/signup, easy exam creation, submission, and result tracking.
            </h3>
            <h3>
                Our goal is to provide a reliable, user-friendly experience for both students and educators. Whether you're preparing for
                competitive exams or conducting internal assessments, our system ensures smooth digital operations.
            </h3>
            <h3>
                Built using modern technologies like ReactJS, Spring Boot, and MySQL, this project represents an effort to modernize education systems.
            </h3>
        </div>
    </div>
);

export default About;
